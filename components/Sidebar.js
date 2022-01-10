import { useGlobalContext } from '../context';

export default function Sidebar({ tuotteet, langat }) {
	const { closeSidebar, setShowProducts } = useGlobalContext();
	const alaluokat = [];
	const uniikitLangat = [];
	const uniikitMuut = [];
	return (
		<div>
			<h3>sidebar</h3>
			<button onClick={closeSidebar}>Sulje</button>
			<button onClick={() => setShowProducts('all')}>Näytä kaikki</button>
			{tuotteet.map((tuote) => {
				const { alaluokka, luokka } = tuote.fields;
				if (luokka && langat === true) {
					alaluokat.push(alaluokka);
					if (uniikitLangat.indexOf(alaluokka) === -1) {
						uniikitLangat.push(alaluokka);
						return (
							<button onClick={() => setShowProducts(alaluokka)} key={tuote.sys.id}>
								{alaluokka}
							</button>
						);
					}
				}
				if (!luokka && langat === false) {
					alaluokat.push(alaluokka);
					if (uniikitLangat.indexOf(alaluokka) === -1) {
						uniikitLangat.push(alaluokka);
						return <button key={tuote.sys.id}>{alaluokka}</button>;
					}
				}
			})}
		</div>
	);
}
