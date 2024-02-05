export const Footer = () => {
  return (
    <footer className="bg-black2 flex h-14 w-full flex-col items-center justify-center gap-2 py-20">
      <div className="flex items-end gap-2">
        <img src="/tw.png" width={120} className="mb-1" />
        <p>Venue Awards</p>
      </div>
      <div className="flex gap-2">
        <img src="/tw-award-1.svg" height={75} width={75} />
        <img src="/tw-award-2.svg" height={75} width={75} />
        <img src="/tw-award-3.svg" height={75} width={75} />
      </div>
    </footer>
  );
};
