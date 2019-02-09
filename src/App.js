import React, { useEffect } from 'react';
// import { Column, Table } from 'react-virtualized'
import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(() => {
    fetch('/users-db.json')
      .then(function(response) {
        return response.json();
      })
      // .then((data) => console.log(data));
  });

  const config = {
    disableHeader: false,
    headerHeight: 30,
    height: 270,
    hideIndexRow: false,
    overscanRowCount: 10,
    rowHeight: 40,
    rowCount: 1000,
    scrollToIndex: undefined,
    // sortBy,
    // sortDirection,
    // sortedList,
    useDynamicRowHeight: false,
  };

  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* <Table
        // ref="Table"
        // disableHeader={disableHeader}
        // headerClassName={styles.headerColumn}
        // headerHeight={headerHeight}
        height={config.height}
        // noRowsRenderer={this._noRowsRenderer}
        // overscanRowCount={overscanRowCount}
        // rowClassName={this._rowClassName}
        // rowHeight={useDynamicRowHeight ? this._getRowHeight : rowHeight}
        // rowGetter={rowGetter}
        // rowCount={rowCount}
        // scrollToIndex={scrollToIndex}
        // sort={this._sort}
        // sortBy={sortBy}
        // sortDirection={sortDirection}
        // width={width}
        >
        {/* {!hideIndexRow && (
          <Column
            label="Index"
            cellDataGetter={({rowData}) => rowData.index}
            dataKey="index"
            disableSort={!this._isSortEnabled()}
            width={60}
          />
        )}
        <Column
          dataKey="name"
          // disableSort={!this._isSortEnabled()}
          // headerRenderer={this._headerRenderer}
          width={90}
        />
        <Column
          width={210}
          disableSort
          label="The description label is really long so that it will be truncated"
          dataKey="random"
          // className={styles.exampleColumn}
          cellRenderer={({cellData}) => cellData} 
          flexGrow={1}
        />
      </Table> */}
    </>
  );
}

export default App;
