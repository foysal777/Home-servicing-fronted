export default function PopularProviders() {
    const providers = [
      {
        name: "Provider Demo",
        role: "Electrician",
        
        img: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      {
        name: "Lucile Devera",
        role: "Cleaner",
        img: "https://randomuser.me/api/portraits/women/44.jpg",
      },
      {
        name: "Maritza Wasson",
        role: "Carpenter",
        img: "https://randomuser.me/api/portraits/women/50.jpg",
      },
      {
        name: "David Morrison",
        role: "Engineer",
        img: "https://randomuser.me/api/portraits/men/46.jpg",
      },
    ];
  
    return (
      <div className="text-center p-10">
        <h2 className="text-3xl font-bold mb-2">
          Popular <span className="text-pink-500">Providers</span>
        </h2>
        <p className="text-gray-600 mb-6">
          Each listing is designed to be clear and concise, providing customers
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {providers.map((provider, index) => (
            <div
              key={index}
              className="border border-pink-500 rounded-lg p-4 flex flex-col items-center text-center shadow-sm"
            >
              <img
                src={provider.img}
                alt={provider.name}
                className="w-16 h-16 rounded-full mb-3"
              />
              <h3 className="font-semibold text-lg">{provider.name}</h3>
              <p className="text-gray-500">{provider.role}</p>
              {provider.services && (
                <p className="text-sm text-gray-600 mt-1">{provider.services}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
  