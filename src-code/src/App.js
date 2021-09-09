import './App.css';
import { useState, useEffect } from 'react'

function App() {

  useEffect(() => {
    let data = localStorage.getItem('currentSelected');
    let buttonList = localStorage.getItem('buttonList');
    if (data && buttonList) {
      setCurrentButtonSeclect(data)
      setCurrentActive(JSON.parse(buttonList))
    }
  }, [])

  const buttonList = {
    green: 'active',
    blue: 'active',
    reset: 'active',
    yellow: 'active'
  };

  const [currentButtonSelected, setCurrentButtonSeclect] = useState('blue');
  const [currentActive, setCurrentActive] = useState(buttonList);

  const handleActive = (item) => {
    setCurrentActive(item);
    localStorage.setItem('buttonList', JSON.stringify(item))
  }
  const handleSelected = (item) => {
    setCurrentButtonSeclect(prev => {
      if (item === 'reset') {
        localStorage.setItem('currentSelected', 'blue')
        return 'blue'
      } else {
        localStorage.setItem('currentSelected', item)
      }
      if (item === 'blue' && prev === 'yellow') {
        handleActive({ ...buttonList, yellow: 'inactive' });
      }
      return item
    })

    switch (item) {
      case 'green':
        handleActive({ ...buttonList, yellow: 'inactive' });
        break;
      case 'yellow':
        handleActive({ ...buttonList, green: 'inactive' });
        break;
      default:
        handleActive({ ...buttonList });
    }
  }
  return (
    <>
      <div className="container">
        {Object.keys(buttonList).map(item => {
          let borderSelected = currentButtonSelected === item && 'border';
          return (
            <div key={item} className="button">
              <button
                disabled={currentActive[item] === 'inactive'}
                onClick={() => handleSelected(item)}
                className={`${item} ${currentActive[item] === 'active' && 'active'} ${borderSelected}`}
              >{item}</button>
            </div>
          )
        })}
      </div>

      <pre>Current Selected: {currentButtonSelected}</pre>
      <pre>Button List: {JSON.stringify(currentActive)}</pre>
    </>
  );
}

export default App;
