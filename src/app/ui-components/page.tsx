import NavbarDisplay from "@/components/ui/NavbarDisplay";
import FooterDisplay from "@/components/ui/FooterDisplay";

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center p-2">
      <NavbarDisplay />
      <FooterDisplay />
    </div>
  );
}
