import Image from "next/image"

const Navbar = () => {
    return (
        <div className="flex items-center justify-between p-4">
        {/* SEARCH BAR */}
        <div className="hidden md:flex"></div>
        <Image src="/search.png" alt="search" width={14} height={14} />
        <input type="text" placeholder="Search..."/>


        {/* ICONS  AND USER */}
        <div className=""></div>
        </div>
    )
}
export default Navbar