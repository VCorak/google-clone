import React from "react";
import "./SearchPage.css";
import { useStateValue } from "./StateProvider";
import useGoogleSearch from "./useGoogleSearch";
/*import Response from "./response";*/
import { Link } from "react-router-dom";
import Search from "./Search";

import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function SearchPage() {
  const [{ term = "tesla" }] = useStateValue();

  //LIVE API CALL
  const { data } = useGoogleSearch(term);

  //MOCK API CALL
  //const data = Response;

  

  console.log(data); //type in "tesla" => when we hit enter is going to redirect us to search page and then it is going to push "tesla" search term in
  //to the data layer. Once that in data layer you can see in search page, we pull it using useState value, now we have that search term nad than we
  // use our custom hook that we created called useGoogleSearch, we passed that term and that way we making a call to google custom search api and than we
  //return the data as an object

  return (
    <div className="searchpage">
      <div className="searchpage__header">
        <Link to="/">
          <img
            className="searchpage__logo"
            src="https://www.google.be/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
            alt="logo"
          />
        </Link>
        <div className="searchpage__headerbody">
          <Search hideButtons />

          <div className="searchpage__options">
            <div className="searchpage__optionsleft">
              <div className="searchpage__option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchpage__option">
                <DescriptionIcon />
                <Link to="/all">News</Link>
              </div>
              <div className="searchpage__option">
                <ImageIcon />
                <Link to="/all">Images</Link>
              </div>
              <div className="searchpage__option">
                <LocalOfferIcon />
                <Link to="/all">shopping</Link>
              </div>
              <div className="searchpage__option">
                <RoomIcon />
                <Link to="/all">maps</Link>
              </div>
              <div className="searchpage__option">
                <MoreVertIcon />
                <Link to="/all">more</Link>
              </div>
            </div>

            <div className="searchpage__optionsright">
              <div className="searchpage__option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchpage__option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {true && (
        <div className="searchpage__results">
          <p className="searchpage__resultcount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime}
            seconds) for {term}
          </p>

          {data?.items.map((item) => (
            <div className="searchpage__result">
              <a className="searchpage__resultlink" href={item.link}>
                {item.pagemap?.cse__image?.length > 0 &&
                  item.pagemap?.cse__image[0]?.src && (
                    <img
                      className="searchpage__resultimage"
                      src={item.pagemap?.cse__image[0]?.src}
                      alt=""
                    />
                  )}
                {item.displayLink}
              </a>
              <a href={item.link} className="searchpage__resulttitle">
                <h2>{item.title}</h2>
              </a>
              <p className="searchpage__resultsnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
