export default function RootPage() {
  return (
    <div
      tw="h-full w-full flex flex-col justify-center items-center p-20"
      style={{ backgroundColor: "#DE4500", color: "#FBF4EF" }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        tw="rounded-full w-32"
        src="og.learnwitheunjae.dev/profile.jpeg"
        alt="Eunjae Lee"
      />
      <p tw="text-7xl font-thin">{"Hello world!!"}</p>
      <p tw="text-7xl font-black">테스트</p>
    </div>
  );
}
