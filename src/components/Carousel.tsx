import { ImagesSlider } from "@/components/ui/images-slider";

export default function ImagesSliderDemo({ images }: { images: string[] }) {
  return (
    <ImagesSlider
      overlay={false}
      className="h-[40rem] rounded-lg"
      direction="up"
      images={images}
    />
  );
}
