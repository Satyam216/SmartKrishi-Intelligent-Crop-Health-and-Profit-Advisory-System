import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { getStates, getDistricts } from "../services/locationApi";
const CropCalendar = () => {
    const [states, setStates] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [selectedState, setSelectedState] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");
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
        const data = await getDistricts(state);
        setDistricts(data);
    };
    return (
        <Layout>
            <div className="max-w-4xl mx-auto p-6">
                <h1 className="text-3xl font-bold text-green-800 mb-8">
                    Crop Calendar
                </h1>
                <div className="grid md:grid-cols-2 gap-6">
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
                            onChange={(e) => setSelectedDistrict(e.target.value)}
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
            </div>
        </Layout>
    );
};
export default CropCalendar;