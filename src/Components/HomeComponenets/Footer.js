export default function Footer()
{
    return (
        <footer>
            <div className="footer-section mt-4  flex py-12">
                <div className="about-com-box w-4/12 ">
                    <img src="" >
                    </img>
                    <div className="px-3 ml-5">
                        <h3 className="text-lg font-semibold">TechDigi Software Pvt Ltd</h3>
                        <h3 className="text-sm mt-3">
                        TechDigi Software Pvt Ltd is commited to deliver high high-quality website development, application development and digital marketing solutions to meet your business needs. We aimed to deliver the best service to our client.
                        </h3>
                    </div>
                </div>
                <div className="Quick-link-box flex flex-col w-4/12 justify-between text-center text-lg font-medium opacity-90 ">
                  <h2 className="text-xl text-blue-900 mb-2 font-semibold">Products</h2>
                    <a className="cursor-pointer text-base mt-2"> Blog</a>
                    <a className="cursor-pointer text-base mt-2">Clients</a>
                    <a className="cursor-pointer text-base mt-2">Terms & Condition</a>
                    <a className="cursor-pointer text-base mt-2">Privacy Policy</a>
                </div>
                <div className="support-box flex flex-col w-4/12 justify-between text-center text-lg font-medium opacity-90">
                    <h2 className="text-xl text-blue-900 mb-2 font-semibold">More</h2>
                    <a className="cursor-pointer text-base mt-2">About</a>
                    <a className="cursor-pointer text-base mt-2">Services</a>
                    <a className="cursor-pointer text-base mt-2">Career</a>
                    <a className="cursor-pointer text-base mt-2">Contact </a>
                </div>
                <div className="charity-loc flex flex-col text-center justify-between text-base font-normal opacity-90 px-5">
                <h2 className="text-xl  font-medium mb-3 text-blue-900">Contact</h2>
                    <a className="cursor-pointer text-base"><i class="fa-solid text-base fa-location-dot text-blue-900 mr-3 mt-2"></i> Sector C-8 Indrapuri Raisen Road Bhopal</a>
                    <a className="cursor-pointer text-base"> <i class="fa-solid fa-envelope mr-3 text-blue-900 text-base mt-2"></i> info@techdigisoftware.com</a>
                    <a className="cursor-pointer text-base"><i class="fa-solid fa-phone text-blue-900 mr-3 mt-2"></i> +91 7223077806</a>
                    <a className="cursor-pointer text-base"> <i class="fa-solid fa-phone text-blue-900 mr-3 mt-2"></i> +91 9479850503</a>
                </div>
            </div>
        </footer>
    )
}