import { useNavigate } from "react-router-dom"
import EllipseCard from "../../components/EllipseCard"

export default function EllipseCards() {
	const navigate = useNavigate()
	const handleClick = () => {
		navigate("/feature/metaversewebbuilders")
	}
	return (
		<section className="mt-40 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 max-lg:gap-20">
			<EllipseCard bottomTitle="Idendtity Agreement" onClick={handleClick}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="72"
					height="72"
					viewBox="0 0 72 72"
					fill="none"
				>
					<path
						d="M54 66C55.5913 66 57.1174 65.3679 58.2426 64.2426C59.3679 63.1174 60 61.5913 60 60V24L42 6H18C16.4087 6 14.8826 6.63214 13.7574 7.75736C12.6321 8.88258 12 10.4087 12 12V60C12 61.5913 12.6321 63.1174 13.7574 64.2426C14.8826 65.3679 16.4087 66 18 66H54ZM39 12L54 27H39V12ZM21 24H30V30H21V24ZM21 36H51V42H21V36ZM21 48H51V54H21V48Z"
						fill="url(#paint0_linear_28_22)"
					/>
					<defs>
						<linearGradient
							id="paint0_linear_28_22"
							x1="66.0239"
							y1="-1.39256"
							x2="-10.8366"
							y2="28.3183"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#DE5364" />
							<stop offset="1" stopColor="#EB805E" />
						</linearGradient>
					</defs>
				</svg>
			</EllipseCard>

			<EllipseCard topTitle="Set Conditions" onClick={handleClick}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="72"
					height="72"
					viewBox="0 0 72 72"
					fill="none"
				>
					<path
						d="M7.5 15L12 19.5L21 10.5"
						stroke="url(#paint0_linear_28_24)"
						strokeWidth="5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M7.5 36L12 40.5L21 31.5"
						stroke="url(#paint1_linear_28_24)"
						strokeWidth="5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M7.5 57L12 61.5L21 52.5"
						stroke="url(#paint2_linear_28_24)"
						strokeWidth="5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M31.5 36H64.5"
						stroke="url(#paint3_linear_28_24)"
						strokeWidth="5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M31.5 57H64.5"
						stroke="url(#paint4_linear_28_24)"
						strokeWidth="5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M31.5 15H64.5"
						stroke="url(#paint5_linear_28_24)"
						strokeWidth="5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<defs>
						<linearGradient
							id="paint0_linear_28_24"
							x1="22.6942"
							y1="9.39112"
							x2="6.40446"
							y2="21.1978"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#DE5364" />
							<stop offset="1" stopColor="#EB805E" />
						</linearGradient>
						<linearGradient
							id="paint1_linear_28_24"
							x1="22.6942"
							y1="30.3911"
							x2="6.40446"
							y2="42.1978"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#DE5364" />
							<stop offset="1" stopColor="#EB805E" />
						</linearGradient>
						<linearGradient
							id="paint2_linear_28_24"
							x1="22.6942"
							y1="51.3911"
							x2="6.40446"
							y2="63.1978"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#DE5364" />
							<stop offset="1" stopColor="#EB805E" />
						</linearGradient>
						<linearGradient
							id="paint3_linear_28_24"
							x1="68.6414"
							y1="35.8768"
							x2="68.4035"
							y2="39.671"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#DE5364" />
							<stop offset="1" stopColor="#EB805E" />
						</linearGradient>
						<linearGradient
							id="paint4_linear_28_24"
							x1="68.6414"
							y1="56.8768"
							x2="68.4035"
							y2="60.671"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#DE5364" />
							<stop offset="1" stopColor="#EB805E" />
						</linearGradient>
						<linearGradient
							id="paint5_linear_28_24"
							x1="68.6414"
							y1="14.8768"
							x2="68.4035"
							y2="18.671"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#DE5364" />
							<stop offset="1" stopColor="#EB805E" />
						</linearGradient>
					</defs>
				</svg>
			</EllipseCard>

			<EllipseCard bottomTitle="Code Business Logic" onClick={handleClick}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="72"
					height="72"
					viewBox="0 0 72 72"
					fill="none"
				>
					<path
						d="M36 30C42.6274 30 48 24.6274 48 18C48 11.3726 42.6274 6 36 6C29.3726 6 24 11.3726 24 18C24 24.6274 29.3726 30 36 30Z"
						stroke="url(#paint0_linear_28_37)"
						strokeWidth="3"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M63 66C63 51.0885 50.9115 39 36 39C21.0885 39 9 51.0885 9 66"
						stroke="url(#paint1_linear_28_37)"
						strokeWidth="3"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M36 66L42 58.5L36 39L30 58.5L36 66Z"
						stroke="url(#paint2_linear_28_37)"
						strokeWidth="3"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<defs>
						<linearGradient
							id="paint0_linear_28_37"
							x1="51.0119"
							y1="3.04298"
							x2="15.2004"
							y2="20.3469"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#DE5364" />
							<stop offset="1" stopColor="#EB805E" />
						</linearGradient>
						<linearGradient
							id="paint1_linear_28_37"
							x1="69.7769"
							y1="35.6733"
							x2="18.3842"
							y2="85.3386"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#DE5364" />
							<stop offset="1" stopColor="#EB805E" />
						</linearGradient>
						<linearGradient
							id="paint2_linear_28_37"
							x1="43.506"
							y1="35.6733"
							x2="22.3933"
							y2="40.2074"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#DE5364" />
							<stop offset="1" stopColor="#EB805E" />
						</linearGradient>
					</defs>
				</svg>
			</EllipseCard>

			<EllipseCard topTitle="Network updates" onClick={handleClick}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="82"
					height="82"
					viewBox="0 0 82 82"
					fill="none"
				>
					<path
						d="M66.3408 34.8V49.2M47.6352 67.2L53.8704 63.6L60.1056 60M35.1648 67.2L28.9278 63.6L22.6926 60M16.4592 34.8V49.2M22.6926 24L28.9296 20.4L35.1648 16.8M47.6352 16.8L53.8704 20.4L60.1056 24"
						stroke="url(#paint0_linear_28_42)"
						strokeWidth="3"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M41.4 78C43.3096 78 45.1409 77.2414 46.4912 75.8912C47.8414 74.5409 48.6 72.7096 48.6 70.8C48.6 68.8904 47.8414 67.0591 46.4912 65.7088C45.1409 64.3586 43.3096 63.6 41.4 63.6C39.4904 63.6 37.6591 64.3586 36.3088 65.7088C34.9586 67.0591 34.2 68.8904 34.2 70.8C34.2 72.7096 34.9586 74.5409 36.3088 75.8912C37.6591 77.2414 39.4904 78 41.4 78ZM41.4 20.4C43.3096 20.4 45.1409 19.6414 46.4912 18.2912C47.8414 16.9409 48.6 15.1096 48.6 13.2C48.6 11.2904 47.8414 9.45909 46.4912 8.10883C45.1409 6.75857 43.3096 6 41.4 6C39.4904 6 37.6591 6.75857 36.3088 8.10883C34.9586 9.45909 34.2 11.2904 34.2 13.2C34.2 15.1096 34.9586 16.9409 36.3088 18.2912C37.6591 19.6414 39.4904 20.4 41.4 20.4ZM41.4 49.2C43.3096 49.2 45.1409 48.4414 46.4912 47.0912C47.8414 45.7409 48.6 43.9096 48.6 42C48.6 40.0904 47.8414 38.2591 46.4912 36.9088C45.1409 35.5586 43.3096 34.8 41.4 34.8C39.4904 34.8 37.6591 35.5586 36.3088 36.9088C34.9586 38.2591 34.2 40.0904 34.2 42C34.2 43.9096 34.9586 45.7409 36.3088 47.0912C37.6591 48.4414 39.4904 49.2 41.4 49.2ZM66.6 34.8C68.5096 34.8 70.3409 34.0414 71.6912 32.6912C73.0414 31.3409 73.8 29.5096 73.8 27.6C73.8 25.6904 73.0414 23.8591 71.6912 22.5088C70.3409 21.1586 68.5096 20.4 66.6 20.4C64.6904 20.4 62.8591 21.1586 61.5088 22.5088C60.1586 23.8591 59.4 25.6904 59.4 27.6C59.4 29.5096 60.1586 31.3409 61.5088 32.6912C62.8591 34.0414 64.6904 34.8 66.6 34.8ZM66.6 63.6C68.5096 63.6 70.3409 62.8414 71.6912 61.4912C73.0414 60.1409 73.8 58.3096 73.8 56.4C73.8 54.4904 73.0414 52.6591 71.6912 51.3088C70.3409 49.9586 68.5096 49.2 66.6 49.2C64.6904 49.2 62.8591 49.9586 61.5088 51.3088C60.1586 52.6591 59.4 54.4904 59.4 56.4C59.4 58.3096 60.1586 60.1409 61.5088 61.4912C62.8591 62.8414 64.6904 63.6 66.6 63.6ZM16.2 34.8C18.1096 34.8 19.9409 34.0414 21.2912 32.6912C22.6414 31.3409 23.4 29.5096 23.4 27.6C23.4 25.6904 22.6414 23.8591 21.2912 22.5088C19.9409 21.1586 18.1096 20.4 16.2 20.4C14.2904 20.4 12.4591 21.1586 11.1088 22.5088C9.75857 23.8591 9 25.6904 9 27.6C9 29.5096 9.75857 31.3409 11.1088 32.6912C12.4591 34.0414 14.2904 34.8 16.2 34.8ZM16.2 63.6C18.1096 63.6 19.9409 62.8414 21.2912 61.4912C22.6414 60.1409 23.4 58.3096 23.4 56.4C23.4 54.4904 22.6414 52.6591 21.2912 51.3088C19.9409 49.9586 18.1096 49.2 16.2 49.2C14.2904 49.2 12.4591 49.9586 11.1088 51.3088C9.75857 52.6591 9 54.4904 9 56.4C9 58.3096 9.75857 60.1409 11.1088 61.4912C12.4591 62.8414 14.2904 63.6 16.2 63.6Z"
						stroke="url(#paint1_linear_28_42)"
						strokeWidth="3"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<defs>
						<linearGradient
							id="paint0_linear_28_42"
							x1="72.6008"
							y1="10.5903"
							x2="-2.11931"
							y2="46.3233"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#DE5364" />
							<stop offset="1" stopColor="#EB805E" />
						</linearGradient>
						<linearGradient
							id="paint1_linear_28_42"
							x1="81.9323"
							y1="-2.87107"
							x2="-18.366"
							y2="40.7461"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#DE5364" />
							<stop offset="1" stopColor="#EB805E" />
						</linearGradient>
					</defs>
				</svg>
			</EllipseCard>

			<EllipseCard bottomTitle="Execution and processing" onClick={handleClick}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="62"
					height="62"
					viewBox="0 0 62 62"
					fill="none"
				>
					<path
						d="M58.4277 19.0723C58.4277 19.5163 58.4076 19.9502 58.3672 20.374C58.3268 20.7979 58.2461 21.2318 58.125 21.6758L61.8486 23.2197L60.3652 26.792L56.6113 25.248C55.6829 26.7415 54.472 27.9525 52.9785 28.8809L54.5225 32.665L50.9502 34.1484L49.376 30.3945C48.9521 30.4954 48.5283 30.5661 48.1045 30.6064C47.6807 30.6468 47.2467 30.6771 46.8027 30.6973C46.3587 30.6973 45.9248 30.6771 45.501 30.6367C45.0771 30.5964 44.6432 30.5156 44.1992 30.3945L43.5029 32.0898L40.1426 30.0615L40.627 28.8809C39.1335 27.9525 37.9225 26.7415 36.9941 25.248L33.21 26.792L31.7266 23.2197L35.4805 21.6758C35.3796 21.252 35.3089 20.8281 35.2686 20.4043C35.2282 19.9805 35.1979 19.5365 35.1777 19.0723C35.1777 18.6283 35.1979 18.1943 35.2383 17.7705C35.2786 17.3467 35.3594 16.9229 35.4805 16.499L31.7266 14.9248L33.21 11.3525L36.9941 12.9268C37.4583 12.18 37.9932 11.5039 38.5986 10.8984C39.2041 10.293 39.8802 9.74805 40.627 9.26367L39.083 5.50977L42.6553 4.02637L44.1992 7.75C44.623 7.64909 45.0469 7.57845 45.4707 7.53809C45.8945 7.49772 46.3385 7.46745 46.8027 7.44727C47.2467 7.44727 47.6807 7.46745 48.1045 7.50781C48.5283 7.54818 48.9521 7.62891 49.376 7.75L50.9502 4.02637L54.5225 5.50977L52.9785 9.26367C54.472 10.1921 55.6829 11.403 56.6113 12.8965L60.3652 11.3525L61.8486 14.9248L58.125 16.499C58.2259 16.9229 58.2966 17.3467 58.3369 17.7705C58.3773 18.1943 58.4076 18.6283 58.4277 19.0723ZM46.8027 26.8223C47.8724 26.8223 48.8714 26.6204 49.7998 26.2168C50.7282 25.8132 51.5557 25.2581 52.2822 24.5518C53.0088 23.8454 53.5638 23.028 53.9473 22.0996C54.3307 21.1712 54.5326 20.1621 54.5527 19.0723C54.5527 18.0026 54.3509 17.0036 53.9473 16.0752C53.5436 15.1468 52.9886 14.3193 52.2822 13.5928C51.5758 12.8662 50.7585 12.3112 49.8301 11.9277C48.9017 11.5443 47.8926 11.3424 46.8027 11.3223C45.7331 11.3223 44.7341 11.5241 43.8057 11.9277C42.8773 12.3314 42.0498 12.8864 41.3232 13.5928C40.5967 14.2992 40.0417 15.1165 39.6582 16.0449C39.2747 16.9733 39.0729 17.9824 39.0527 19.0723C39.0527 20.1419 39.2546 21.141 39.6582 22.0693C40.0618 22.9977 40.6169 23.8252 41.3232 24.5518C42.0296 25.2783 42.847 25.8333 43.7754 26.2168C44.7038 26.6003 45.7129 26.8021 46.8027 26.8223ZM29.335 33.4824L33.543 31.7266L34.875 34.9355V35.3896L30.8486 37.0547C30.9899 37.5996 31.1009 38.1445 31.1816 38.6895C31.2624 39.2344 31.3027 39.7995 31.3027 40.3848C31.3027 40.9499 31.2624 41.5049 31.1816 42.0498C31.1009 42.5947 30.9899 43.1497 30.8486 43.7148L34.875 45.3799V45.834L33.543 49.043L29.335 47.2871C28.7497 48.2559 28.0635 49.1338 27.2764 49.9209C26.4893 50.708 25.6113 51.4043 24.6426 52.0098L26.3984 56.2178L22.7959 57.7012L21.0703 53.4932C20.5254 53.6344 19.9805 53.7454 19.4355 53.8262C18.8906 53.9069 18.3255 53.9473 17.7402 53.9473C17.1751 53.9473 16.6201 53.9069 16.0752 53.8262C15.5303 53.7454 14.9753 53.6344 14.4102 53.4932L12.6543 57.7012L9.08203 56.2178L10.8379 51.9795C8.88021 50.8089 7.31608 49.2448 6.14551 47.2871L1.90723 49.043L0.454102 45.4707L4.63184 43.7148C4.49056 43.1699 4.37956 42.625 4.29883 42.0801C4.2181 41.5352 4.17773 40.9701 4.17773 40.3848C4.17773 39.8197 4.2181 39.2646 4.29883 38.7197C4.37956 38.1748 4.49056 37.6198 4.63184 37.0547L0.454102 35.3291L1.90723 31.7266L6.14551 33.4824C7.31608 31.5247 8.88021 29.9606 10.8379 28.79L9.08203 24.582L12.6543 23.0986L14.4102 27.2764C14.9551 27.1351 15.5 27.0241 16.0449 26.9434C16.5898 26.8626 17.1549 26.8223 17.7402 26.8223C18.3053 26.8223 18.8604 26.8626 19.4053 26.9434C19.9502 27.0241 20.5052 27.1351 21.0703 27.2764L22.7959 23.0986L26.3984 24.582L24.6426 28.79C26.6003 29.9606 28.1644 31.5247 29.335 33.4824ZM17.7402 50.0723C19.0723 50.0723 20.3236 49.82 21.4941 49.3154C22.6647 48.8109 23.6839 48.1247 24.5518 47.2568C25.4196 46.389 26.1159 45.3597 26.6406 44.1689C27.1654 42.9782 27.4277 41.7168 27.4277 40.3848C27.4277 39.0527 27.1755 37.8014 26.6709 36.6309C26.1663 35.4603 25.4701 34.4411 24.582 33.5732C23.694 32.7054 22.6647 32.0091 21.4941 31.4844C20.3236 30.9596 19.0723 30.6973 17.7402 30.6973C16.4082 30.6973 15.1569 30.9495 13.9863 31.4541C12.8158 31.9587 11.7865 32.6549 10.8984 33.543C10.0104 34.431 9.31413 35.4603 8.80957 36.6309C8.30501 37.8014 8.05273 39.0527 8.05273 40.3848C8.05273 41.7168 8.30501 42.9681 8.80957 44.1387C9.31413 45.3092 10.0003 46.3385 10.8682 47.2266C11.736 48.1146 12.7653 48.8109 13.9561 49.3154C15.1468 49.82 16.4082 50.0723 17.7402 50.0723ZM38.75 62V34.875L61.3643 48.4375L38.75 62ZM42.625 41.7168V55.1582L53.8262 48.4375L42.625 41.7168Z"
						fill="url(#paint0_linear_28_54)"
					/>
					<defs>
						<linearGradient
							id="paint0_linear_28_54"
							x1="69.5535"
							y1="-3.11652"
							x2="-19.9967"
							y2="42.7069"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#DE5364" />
							<stop offset="1" stopColor="#EB805E" />
						</linearGradient>
					</defs>
				</svg>
			</EllipseCard>

			<EllipseCard
				topTitle="Encryption and Blockchain Technology"
				longContent={true}
				onClick={handleClick}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="72"
					height="72"
					viewBox="0 0 72 72"
					fill="none"
				>
					<g clipPath="url(#clip0_28_58)">
						<path
							d="M36 24L27 29.25V39.75L36 45L45 39.75V29.25L36 24ZM40.551 30.12L35.961 32.796L31.41 30.141L36 27.465L40.551 30.12ZM29.97 32.766L34.422 35.364V40.614L29.97 38.019V32.766ZM37.392 40.725V35.424L42.03 32.718V38.019L37.392 40.725ZM9 0L0 5.25V15.75L9 21L18 15.75V5.25L9 0ZM13.551 6.12L8.961 8.796L4.41 6.141L9 3.465L13.551 6.12ZM2.97 8.763L7.422 11.361V16.611L2.97 14.022V8.763ZM10.392 16.722V11.424L15.03 8.718V14.019L10.392 16.722ZM9 51L0 56.25V66.75L9 72L18 66.75V56.25L9 51ZM13.551 57.12L8.961 59.796L4.41 57.141L9 54.465L13.551 57.12ZM2.97 59.766L7.422 62.364V67.614L2.97 65.022V59.766ZM10.392 67.725V62.424L15.03 59.718V65.019L10.392 67.725ZM63 0L54 5.25V15.75L63 21L72 15.75V5.25L63 0ZM67.551 6.12L62.961 8.796L58.41 6.141L63 3.465L67.551 6.12ZM56.97 8.766L61.422 11.364V16.614L56.97 14.019V8.766ZM64.392 16.725V11.424L69.03 8.718V14.019L64.392 16.725ZM63 51L54 56.25V66.75L63 72L72 66.75V56.25L63 51ZM67.551 57.12L62.961 59.796L58.41 57.141L63 54.465L67.551 57.12ZM56.97 59.766L61.422 62.364V67.614L56.97 65.019V59.766ZM64.392 67.725V62.424L69.03 59.718V65.019L64.392 67.725ZM27 9H45V12H27V9ZM27 60H45V63H27V60ZM10.5 27V45H7.5V27H10.5ZM21.879 26.484L15.516 20.121L17.637 18L24 24.36L21.879 26.484ZM48 24.879L54.363 18.516L56.484 20.637L50.121 27L48 24.879ZM24.384 44.637L18.021 51L15.9 48.879L22.263 42.516L24.384 44.637ZM50.637 42.387L57 48.75L54.879 50.871L48.516 44.508L50.637 42.387ZM64.5 27V45H61.5V27H64.5Z"
							fill="url(#paint0_linear_28_58)"
						/>
					</g>
					<defs>
						<linearGradient
							id="paint0_linear_28_58"
							x1="81.0358"
							y1="-8.87107"
							x2="-26.3988"
							y2="43.0407"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#DE5364" />
							<stop offset="1" stopColor="#EB805E" />
						</linearGradient>
						<clipPath id="clip0_28_58">
							<rect width="72" height="72" fill="white" />
						</clipPath>
					</defs>
				</svg>
			</EllipseCard>
		</section>
	)
}