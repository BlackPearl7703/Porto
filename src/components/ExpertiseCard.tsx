
// disable strict mode



const ExpertiseCard = ({ title, description } : { title: string; description: string; }) => {
  return (
    <div className="border p-4 rounded shadow-md">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ExpertiseCard;
