import SectionWithLocale from "@/components/Section/SectionWithLocale";
import ModelComp from "@/components/ui/root/3D/ModelComp";
import ShadowButton from "@/components/ui/shadow-button";
import { Separator } from "@/components/ui/separator";
import { useLocale } from "next-intl";

function Page() {
	const locale = useLocale();
	const isRtl = locale === "he" || locale === "ar";
	return (
		<SectionWithLocale sectionName="product-page" className="pt-6">
			<div className="container  mx-auto min-h-[90vh]">
				<div className="grid grid-cols-1 md:grid-cols-5">
					<div className={`${isRtl ? "border-l" : "border-r"} col-span-2`}>
						<div className="model-header p-4">
							<h1 className="font-bold text-4xl md:text-7xl uppercase text-appBlue">
								Model name
							</h1>
							<p>Patent Pending 656514</p>
						</div>
						<Separator />
						<div className="model-description p-4">
							<h1 className="font-semibold text-2xl md:text-5xl uppercase text-zinc-900 mb-4">
								model description
							</h1>
							<p className="text-base font-medium">
								Implement spacer – a standardized concrete from spacer to ensure
								maximad precision in placing of concrete forms and meshes and to
								save time, money and manpower.
							</p>
						</div>
						<Separator />
						<div className="model-usage p-4">
							<h1 className="font-semibold text-2xl uppercase text-zinc-900 mb-4">
								model usage
							</h1>
							<p className="text-sm md:text-base capitalize">
								* Keeper 20 is a universal plastic accessory Easy to install,{" "}
								<br />
								* connects with a click Designed to be used in casting of
								concrete <br />
								* walls, columns and beams Compatible with 6-12 mm rebars <br />
								* Significant saving in time and manpower required for formwork{" "}
								<br />
								* Maintains standard spaces between the reinforcing meshes and
								the <br />* forms High compressive strength Maximal accuracy in
								laying <br />* meshes and forms. Minimal interface with the
								forms 3 built-in <br />
								* water seals designed to prevent water penetration, corrosion
								and <br />
								* crack formation Low self-weight – convenient handling, <br />*
								transportation and storage Recommended use 3-4 units per 1 m²{" "}
								<br />
							</p>
						</div>
						<Separator />
						<div className="model-certifications p-4 hidden md:flex">
							<h1 className="font-bold text-2xl uppercase text-sky-900 mb-4">
								model certifications / materials / anydata
							</h1>
						</div>
					</div>
					<div className="left flex flex-col col-span-3">
						<div className="3d-model flex justify-start w-full flex-col items-start md:items-end">
							<ModelComp />
						</div>
						<div className="images-col p-4">
							<h1 className="font-bold text-2xl uppercase text-sky-900 mb-4">
								model usage graphics
							</h1>
							<div className="w-full flex justify-evenly items-center gap-4">
								<div className="w-24 md:w-36 h-24 md:h-36 bg-gray-300"></div>
								<div className="w-24 md:w-36 h-24 md:h-36 bg-gray-300"></div>
								<div className="w-24 md:w-36 h-24 md:h-36 bg-gray-300"></div>
								<div className="w-24 md:w-36 h-24 md:h-36 bg-gray-300"></div>
							</div>
						</div>
						<Separator />
						<div className="actions  h-full p-4 gap-4 flex flex-col justify-center">
							<ShadowButton
								flipIcon={isRtl}
								className="w-full text-nowrap"
								variant="secondary"
								icon={
									<svg
										width="18px"
										height="18px"
										viewBox="-0.5 0 8 8"
										version="1.1"
										xmlns="http://www.w3.org/2000/svg">
										<title>play [#1001]</title>
										<desc>Created with Sketch.</desc>
										<defs></defs>
										<g
											id="Page-1"
											stroke="none"
											stroke-width="1"
											fill="none"
											fill-rule="evenodd">
											<g
												id="Dribbble-Light-Preview"
												transform="translate(-427.000000, -3765.000000)"
												fill="currentColor">
												<g
													id="icons"
													transform="translate(56.000000, 160.000000)">
													<polygon
														id="play-[#1001]"
														points="371 3605 371 3613 378 3609"></polygon>
												</g>
											</g>
										</g>
									</svg>
								}>
								demo video
							</ShadowButton>
							<ShadowButton
								icon={
									<svg
										width="18px"
										height="18px"
										viewBox="0 -2 30 30"
										version="1.1"
										xmlns="http://www.w3.org/2000/svg">
										<title>download</title>
										<defs></defs>
										<g
											id="Page-1"
											stroke="none"
											stroke-width="1"
											fill="none"
											fill-rule="evenodd">
											<g
												id="Icon-Set"
												transform="translate(-101.000000, -726.000000)"
												fill="currentColor">
												<path
													d="M130,726 L102,726 C101.448,726 101,726.448 101,727 L101,735 C101,735.553 101.448,736 102,736 C102.552,736 103,735.553 103,735 L103,728 L129,728 L129,735 C129,735.553 129.448,736 130,736 C130.552,736 131,735.553 131,735 L131,727 C131,726.447 130.552,726 130,726 L130,726 Z M120.267,744.3 L117,748.26 L117,734.002 C117,733.449 116.552,733 116,733 C115.448,733 115,733.449 115,734.002 L115,748.298 L111.702,744.3 C111.31,743.905 110.674,743.905 110.282,744.3 C109.89,744.693 109.89,745.332 110.282,745.726 L115.224,751.717 C115.433,751.927 115.71,752.017 115.984,752.002 C116.258,752.017 116.536,751.927 116.745,751.717 L121.687,745.726 C122.079,745.332 122.079,744.693 121.687,744.3 C121.295,743.905 120.659,743.905 120.267,744.3 L120.267,744.3 Z"
													id="download"></path>
											</g>
										</g>
									</svg>
								}
								variant="default">
								specsifications
							</ShadowButton>
							<ShadowButton
								icon={
									<svg
										width="18px"
										height="18px"
										viewBox="0 -2 30 30"
										version="1.1"
										xmlns="http://www.w3.org/2000/svg">
										<title>download</title>
										<defs></defs>
										<g
											id="Page-1"
											stroke="none"
											stroke-width="1"
											fill="none"
											fill-rule="evenodd">
											<g
												id="Icon-Set"
												transform="translate(-101.000000, -726.000000)"
												fill="currentColor">
												<path
													d="M130,726 L102,726 C101.448,726 101,726.448 101,727 L101,735 C101,735.553 101.448,736 102,736 C102.552,736 103,735.553 103,735 L103,728 L129,728 L129,735 C129,735.553 129.448,736 130,736 C130.552,736 131,735.553 131,735 L131,727 C131,726.447 130.552,726 130,726 L130,726 Z M120.267,744.3 L117,748.26 L117,734.002 C117,733.449 116.552,733 116,733 C115.448,733 115,733.449 115,734.002 L115,748.298 L111.702,744.3 C111.31,743.905 110.674,743.905 110.282,744.3 C109.89,744.693 109.89,745.332 110.282,745.726 L115.224,751.717 C115.433,751.927 115.71,752.017 115.984,752.002 C116.258,752.017 116.536,751.927 116.745,751.717 L121.687,745.726 C122.079,745.332 122.079,744.693 121.687,744.3 C121.295,743.905 120.659,743.905 120.267,744.3 L120.267,744.3 Z"
													id="download"></path>
											</g>
										</g>
									</svg>
								}
								variant="outline">
								certifications
							</ShadowButton>
						</div>
					</div>
				</div>
			</div>
		</SectionWithLocale>
	);
}

export default Page;
