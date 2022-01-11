import { useGlobalContext } from '../context';
import { GrClose } from 'react-icons/gr';

import styled from '../styles/sidebar.module.css';

export default function Sidebar({ tuotteet, langat }) {
	const { closeSidebar, setShowProducts } = useGlobalContext();
	const alaluokat = [];
	const uniikitLangat = [];
	const uniikitMuut = [];

	return (
		<div className={styled.sidebar}>
			<div className={styled.header}>
				<h3 className={styled.title}>Tuoteluokat</h3>
				<button className={styled.closebtn} onClick={closeSidebar}>
					<GrClose />
				</button>
			</div>
			<div className={styled.main}>
				<button
					className={styled.sidebarbtn}
					onClick={() => {
						setShowProducts('all');
						closeSidebar();
					}}
				>
					Näytä kaikki
				</button>
				{tuotteet.map((tuote) => {
					const { alaluokka, luokka } = tuote.fields;
					if (luokka && langat === true) {
						alaluokat.push(alaluokka);
						if (uniikitLangat.indexOf(alaluokka) === -1) {
							uniikitLangat.push(alaluokka);
							return (
								<div>
									<button
										className={styled.sidebarbtn}
										onClick={() => {
											setShowProducts(alaluokka);
											closeSidebar();
										}}
										key={tuote.sys.id}
									>
										{alaluokka}
									</button>
								</div>
							);
						}
					}
					if (!luokka && langat === false) {
						alaluokat.push(alaluokka);

						if (uniikitMuut.indexOf(alaluokka) === -1) {
							uniikitMuut.push(alaluokka);
							return (
								<button
									className={styled.sidebarbtn}
									onClick={() => {
										setShowProducts(alaluokka);
										closeSidebar();
									}}
									key={tuote.sys.id}
								>
									{alaluokka}
								</button>
							);
						}
					}
				})}
			</div>
		</div>
	);
}
