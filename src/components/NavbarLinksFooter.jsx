import Button from "./Button";

export default function NavbarLinksFooter() {
  return (
    <div className="py-2 flex items-center justify-between">
      <div className="flex items-center ">
        <Button type="navbarFooter">en</Button>
        <Button
          extraClasses="border-l-2 border-r-2 border-main "
          type="navbarFooter"
        >
          fr
        </Button>
        <Button type="navbarFooter">it</Button>
      </div>

      <Button extraClasses="font-semibold">Login</Button>
    </div>
  );
}
