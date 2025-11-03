export default function Certifications() {
    return (
        <div className="w-full h-fit p-10 md:pb-0">
            <div className="w-full text-center flex flex-row flex-wrap justify-center gap-10">
                <div className="max-w-sm rounded-xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300 bg-[#f1e1a7] p-5 border-2 border-[#2c2d68]">
                    <img className="w-full rounded-xl" src={"https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~ZSGYB3P6CSG2/CERTIFICATE_LANDING_PAGE~ZSGYB3P6CSG2.jpeg"} alt={"certification-img"} />
                    <div className="mt-5">
                        <div className="font-bold text-xl mb-2">Machine Learning Specialization from Coursera</div>
                    </div>
                </div>
            </div>
        </div>
    );
}