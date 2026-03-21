import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { getStates, getDistricts } from "../services/locationApi";
import { getCrops } from "../services/cropApi";

const CropCalendar = () => {
    const [states, setStates] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [selectedState, setSelectedState] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [crops, setCrops] = useState([]);
    
    useEffect(() => {
        const loadStates = async () => {
            const data = await getStates();
            setStates(data);
        };
        loadStates();
    }, []);

    const handleStateChange = async (e) => {
        const state = e.target.value;
        setSelectedState(state);
        setSelectedDistrict("");
        setCrops([]);
        const data = await getDistricts(state);
        setDistricts(data);
        console.log("STATE:", selectedState);
    };

    const handleDistrictChange = async (e) => {
        const district = e.target.value;
        setSelectedDistrict(district);
        const cropData = await getCrops(selectedState, district);
        setCrops(cropData);
        console.log("DISTRICT:", selectedDistrict);
        console.log("CROPS:", cropData);
    };
    return (
        <Layout>
            <div className="max-w-6xl mx-auto p-6">
                <h1 className="text-3xl font-bold text-green-800 mb-8">
                    Crop Calendar
                </h1>
                {/* Filters */}
                <div className="grid md:grid-cols-2 gap-6 mb-10">
                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Select State
                        </label>
                        <select
                            className="w-full border rounded-lg p-3"
                            value={selectedState}
                            onChange={handleStateChange}
                        >
                            <option value="">Choose State</option>
                            {states.map((state) => (
                                <option key={state} value={state}>
                                    {state}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Select District
                        </label>
                        <select
                            className="w-full border rounded-lg p-3"
                            value={selectedDistrict}
                            onChange={handleDistrictChange}
                        >
                            <option value="">Choose District</option>
                            {districts.map((d) => (
                                <option key={d.name} value={d.name}>
                                    {d.name} ({d.pincode})
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                {/* Crop Cards */}
                {crops.length > 0 && (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {crops.map((crop, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow p-6 border hover:shadow-lg transition"
                            >
                                <h2 className="text-xl font-bold text-green-700">
                                    {crop.crop}
                                </h2>
                                <span className="inline-block mt-3 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                                    {crop.season}
                                </span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </Layout>
    );
};
export default CropCalendar;