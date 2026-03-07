import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useAuth } from "../context/AuthContext";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { Pencil } from "lucide-react";
import { apiRequest } from "../services/api";
import toast from "react-hot-toast";

const Profile = () => {

  const { currentUser } = useAuth();

  const [profile, setProfile] = useState({});
  const [editing, setEditing] = useState({});
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {

    const fetchProfile = async () => {

      if (!currentUser) return;

      const userRef = doc(db, "users", currentUser.uid);
      const snap = await getDoc(userRef);

      if (snap.exists()) {
        setProfile(snap.data());
      }

      setLoading(false);

    };

    fetchProfile();

  }, [currentUser]);

  const handleChange = (e) => {

    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    });

  };

  const toggleEdit = (field) => {

    setEditing({
      ...editing,
      [field]: !editing[field]
    });

  };

  const handleSave = async () => {

    try {

      const userRef = doc(db, "users", currentUser.uid);

      await updateDoc(userRef, {
        name: profile.name,
        age: profile.age,
        state: profile.state,
        city: profile.city,
        country: profile.country,
        ...(profile.aadhaar && { aadhaar: profile.aadhaar })
      });

      toast.success("Profile updated");

    } catch {
      toast.error("Failed to update profile");
    }

  };

  // Image select

  const handleImageChange = (e) => {

    const file = e.target.files[0];

    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image should be under 5MB");
      return;
    }

    setImage(file);

  };

  // Upload image

  const uploadImage = async () => {

    if (!image) {
      toast.error("Please select an image");
      return;
    }

    try {

      setUploading(true);

      const formData = new FormData();
      formData.append("image", image);

      const data = await apiRequest("/upload/profile-image", {
        method: "POST",
        body: formData
      });

      setProfile({
        ...profile,
        photoURL: data.photoURL
      });

      toast.success("Image uploaded");

      setImage(null);

    } catch {
      toast.error("Upload failed");
    } finally {
      setUploading(false);
    }

  };

  if (loading) {
    return (
      <Layout>
        <div className="p-10 text-center">Loading...</div>
      </Layout>
    );
  }

  return (

    <Layout>

      <div className="max-w-3xl mx-auto bg-white p-6 md:p-8 rounded-2xl shadow">

        <h1 className="text-2xl md:text-3xl font-bold text-green-800 mb-6">
          Farmer Profile
        </h1>

        {/* Profile Image */}

        <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">

          <img
            src={profile.photoURL || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
            className="w-24 h-24 rounded-full object-cover border"
          />

          <div className="flex flex-col gap-2">

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />

            <button
              onClick={uploadImage}
              disabled={uploading}
              className={`px-4 py-2 rounded text-white transition ${
                uploading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700"
              }`}
            >
              {uploading ? "Uploading..." : "Upload Image"}
            </button>

          </div>

        </div>

        {/* Profile Fields */}

        <ProfileField
          label="Full Name"
          name="name"
          value={profile.name}
          editable
          editing={editing.name}
          toggleEdit={() => toggleEdit("name")}
          onChange={handleChange}
        />

        <ProfileField
          label="Email"
          value={profile.email}
        />

        <ProfileField
          label="Aadhaar Number"
          name="aadhaar"
          value={profile.aadhaar}
          editable={!profile.aadhaar}
          editing={!profile.aadhaar && editing.aadhaar}
          toggleEdit={() => toggleEdit("aadhaar")}
          onChange={handleChange}
        />

        <ProfileField
          label="Age"
          name="age"
          value={profile.age}
          editable
          editing={editing.age}
          toggleEdit={() => toggleEdit("age")}
          onChange={handleChange}
        />

        <ProfileField
          label="State"
          name="state"
          value={profile.state}
          editable
          editing={editing.state}
          toggleEdit={() => toggleEdit("state")}
          onChange={handleChange}
        />

        <ProfileField
          label="City"
          name="city"
          value={profile.city}
          editable
          editing={editing.city}
          toggleEdit={() => toggleEdit("city")}
          onChange={handleChange}
        />

        <ProfileField
          label="Country"
          name="country"
          value={profile.country}
          editable
          editing={editing.country}
          toggleEdit={() => toggleEdit("country")}
          onChange={handleChange}
        />

        <button
          onClick={handleSave}
          className="mt-6 w-full md:w-auto bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
        >
          Save Changes
        </button>

      </div>

    </Layout>

  );

};

const ProfileField = ({
  label,
  name,
  value,
  editable,
  editing,
  toggleEdit,
  onChange
}) => {

  return (

    <div className="flex items-center justify-between border-b py-3">

      <div className="flex-1">

        <div className="text-sm text-gray-500">
          {label}
        </div>

        {editing ? (

          <input
            name={name}
            value={value || ""}
            onChange={onChange}
            className="border p-2 rounded mt-1 w-full"
          />

        ) : (

          <div className="font-medium">
            {value || "Not provided"}
          </div>

        )}

      </div>

      {editable && (

        <button
          onClick={toggleEdit}
          className="ml-4 text-gray-600 hover:text-green-600"
        >
          <Pencil size={16}/>
        </button>

      )}

    </div>

  );

};

export default Profile;