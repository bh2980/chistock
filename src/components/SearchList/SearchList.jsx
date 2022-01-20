import React from 'react'
import './SearchListStyle.scss'

const SearchList = () =>{
    return (
        <>
            <div className="wrapper">
                <div className="contents">
                    <div className="search-result shadow-box">
                        <h1>'APPLE' 검색 결과 6건</h1>
                    </div>
                    <div className="search-item shadow-box">
                        <div className="number shadow-box">
                            <h1>1</h1>
                        </div>
                        <div className="company-name">Apple Inc. (APPL)</div>
                    </div>
                    <div className="search-item shadow-box">
                        <div className="number shadow-box">
                            <h1>2</h1>
                        </div>
                    </div>
                    <div className="search-item shadow-box">
                        <div className="number shadow-box">
                            <h1>3</h1>
                        </div>
                    </div>
                    <div className="search-item shadow-box">
                        <div className="number shadow-box">
                            <h1>4</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SearchList;