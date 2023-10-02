import DynamicMap from "@/components/map_component/DynamicMap";

export default function Home() {

  const center = [120.9842, 14.5995];
    const zoom = 7;

  return (
    <main className="flex-1 overflow-y-auto">
      
      <DynamicMap />
      
    </main>
  )
}
