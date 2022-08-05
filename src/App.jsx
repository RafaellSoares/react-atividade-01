import SideBar from './components/SideBar.jsx';
import HeadersLink from './components/HeadersLink.jsx';
import TabsClearFix from './components/TabsClearFix.jsx';
import Conteudo1 from './components/Conteudo1.jsx';
import ArticleRight from './components/ArticleRight.jsx';
import Conteudo2 from './components/Conteudo2.jsx';
import ContentsPanel from './components/ContentsPanel.jsx';
import Conteudo3 from './components/Conteudo3.jsx';
import LavenderBox from './components/LavenderBox.jsx';
import Categories from './components/Categories.jsx';
import PageFooter from './components/PageFooter.jsx';
import './App.css';

function App() {
  return (
    <div className="wrapAll clearfix">
      <SideBar />
      <div className="mainsection">
        <HeadersLink />

        <TabsClearFix />
        <div className="article">
          <Conteudo1 />
          <ArticleRight />
          <Conteudo2 />
          <div className="contentsPanel">
            <ContentsPanel />
          </div>
          <Conteudo3 />
          <div class="lavenderBox">
            <LavenderBox />
          </div>
          <Categories />
        </div>
        <PageFooter />
      </div>
    </div>
  );
}

export default App;
