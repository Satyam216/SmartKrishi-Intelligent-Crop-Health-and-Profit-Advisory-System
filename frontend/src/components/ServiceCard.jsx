const ServiceCard = ({ title, desc }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:scale-105 transition duration-300">
      <h3 className="text-xl font-semibold text-green-700 mb-2">
        {title}
      </h3>
      <p className="text-gray-600 text-sm">
        {desc}
      </p>
    </div>
  );
};

export default ServiceCard;
