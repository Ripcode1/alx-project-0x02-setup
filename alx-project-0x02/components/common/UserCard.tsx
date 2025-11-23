import { type UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ id, name, username, email, address, phone, website, company }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="border-b border-gray-200 pb-4 mb-4">
        <h3 className="text-2xl font-bold text-gray-800">{name}</h3>
        <p className="text-gray-500">@{username}</p>
      </div>
      
      <div className="space-y-2 text-gray-700">
        <div>
          <span className="font-semibold">Email:</span> {email}
        </div>
        <div>
          <span className="font-semibold">Phone:</span> {phone}
        </div>
        <div>
          <span className="font-semibold">Website:</span>{' '}
          <a href={`https://${website}`} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
            {website}
          </a>
        </div>
        <div>
          <span className="font-semibold">Address:</span> {address.street}, {address.suite}, {address.city} {address.zipcode}
        </div>
        <div className="pt-2 border-t border-gray-200 mt-2">
          <span className="font-semibold">Company:</span> {company.name}
          <p className="text-sm text-gray-500 italic">{company.catchPhrase}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
