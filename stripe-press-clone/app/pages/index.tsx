import Layout from "../components/Layout";

export default function Home() {
    const books = [
        "Book 1",
        "Book 2",
        "Book 3",
        "Book 4",
        "Book 5",
        "Book 6",
        "Book 7",
        "Book 8",
        "Book 9",
        "Book 10",
        "Book 11",
        "Book 12",
        "Book 13",
        "Book 14",
        "Book 15",
        "Book 16",
      ];
  return (
    <Layout>
      <div className="relative flex flex-col items-center justify-between mt-10 py-6 sm:py-8 md:py-12 lg:py-16 min-h-screen">
      {[...Array(16)].map((_, i) => (
          <div
            key={i}
            className="w-[300px] h-[50px] bg-gray-700 text-white text-center flex items-center justify-center shadow-lg border border-gray-500"
            style={{ transform: `translateY(${i * 30}px)`, zIndex: 16 - i }}
          >
            Book {i + 1}
          </div>
        ))}
      </div>
    </Layout>
  );
}