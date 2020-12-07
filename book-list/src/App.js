import BestSellingBooks from './components/BestSellingBooks';
import UserBooks from './components/UserBooks';
import {FlexBoxWrap, Header1, Header2} from './styledComponents/styledComponents';

function App() {
  return (
    <div className="App">
      <FlexBoxWrap className="App-header">
          <div>
              <Header1>Best Selling Books</Header1>
              <BestSellingBooks />
          </div>
          <div>
              <Header1>My Books</Header1>
              <Header2>Click the + icon to add best sellers to your list</Header2>
              <Header2>Click the - icon to remove best sellers from your list</Header2>
              <UserBooks />
          </div>
      </FlexBoxWrap>
    </div>
  );
}

export default App;
