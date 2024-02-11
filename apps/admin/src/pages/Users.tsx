import { UserType } from "shared-types";

const mockUsers: UserType[] = [
  {
    email: "mock1@telenet.com",
    name: "Damian",
    lastName: "Vila",
    bookings: ["booking"],
  },
  {
    email: "mock3@telenet.com",
    name: "Damian",
    lastName: "Vila",
    bookings: ["booking"],
  },
];

export const Users = () => {
  return (
    <section
      id="services"
      className="flex w-full flex-col gap-3 bg-earth-4 p-4 pt-12"
    >
      <h2 className="text-center text-6xl text-black">Users</h2>
      {mockUsers.map(({ name, email, bookings }) => (
        <div
          key={email}
          className="flex flex-col gap-2 rounded-md border-2 border-white p-2"
        >
          <div>Name: {name}</div>
          <div>Email: {email}</div>
          <div>Bookings: {bookings?.map((e) => e)}</div>
        </div>
      ))}
    </section>
  );
};
