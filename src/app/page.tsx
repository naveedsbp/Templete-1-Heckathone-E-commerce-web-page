// import Image from "next/image";
import Topone from '../../tsconfig-file/Topone';
import TopTwoVersace from '../../tsconfig-file/Toptwoversace';
import Footer from './components/footer';
import Navbar from './components/Navbar'
import TopfourHappy from './components/TopfourHappy';
import TopThreeBrowse from './components/TopthreeBrowse';


export default function Home() {
  return (
   <div>
    <Navbar />
    <Topone />
    <TopTwoVersace />
    <TopThreeBrowse />
    <TopfourHappy />

    <Footer />


   </div>
  );
}
