import DynamicSVG from "@/components/dynamic_svg";
import Image from "next/image";


export default function Home() {
  return (
    <main>
      <div>
        <h1>SVG Helper</h1>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}>
          <DynamicSVG filePath={'https://crossroad-venture-studio.github.io/Design-System/icons/camera/flash-off-dark.svg'} color={'red'} />
          <DynamicSVG filePath={'https://crossroad-venture-studio.github.io/Design-System/icons/actions/add-filled-dark.svg'} color={'green'} />
          <DynamicSVG filePath={'https://crossroad-venture-studio.github.io/Design-System/icons/actions/add-filled-light.svg'} color={'yellow'} />
          <DynamicSVG filePath={'https://crossroad-venture-studio.github.io/Design-System/icons/actions/add-wired-dark.svg'} color={'green'} />
          <DynamicSVG filePath={'https://crossroad-venture-studio.github.io/Design-System/icons/actions/add-wired-light.svg'} color={'red'} size={45} />

          <Image src={'https://crossroad-venture-studio.github.io/Design-System/icons/actions/add-wired-dark.svg'} alt="add-wired-light" width={100} height={100} />

        </div>

      </div>
    </main>
  );
}
