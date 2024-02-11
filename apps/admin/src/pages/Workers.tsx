import { WorkerType } from "shared-types";

const mockWorkers: WorkerType[] = [
  {
    email: "mock1@telenet.com",
    name: "Damian Vila",
    specialties: ["Deep Tissue"],
  },
  {
    email: "mock3@telenet.com",
    name: "Damian Vila",
    specialties: ["Deep Tissue"],
  },
];

export const Workers = () => {
  return (
    <section
      id="services"
      className="flex w-full flex-col gap-3 bg-earth-3 p-4 pt-12"
    >
      <h2 className="text-center text-6xl text-black">Workers</h2>
      {mockWorkers.map(({ name, email, specialties }) => (
        <div
          key={email}
          className="flex flex-col gap-2 rounded-md border-2 border-white p-2"
        >
          <div>Name: {name}</div>
          <div>Email: {email}</div>
          <div>Specialties: {specialties?.map((e) => e)}</div>
        </div>
      ))}
    </section>
  );
};
