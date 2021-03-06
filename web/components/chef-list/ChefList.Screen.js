import React, { useState, useContext } from 'react';
import ChefList from './components/ChefList';
import ChefFilterOptions from './components/ChefFilterOptions';
import s from './ChefList.String';
import Page from '../shared/layout/Main';
import LeftSidebar from './components/LeftSidebar';
import * as utils from '../../utils/checkEmptycondition';
import { toastMessage } from '../../utils/Toast';
import { AppContext } from '../../context/appContext';
import moment from 'moment';

const ChefListScreen = props => {
  let rangeObj = {},
    cuisineObj = {},
    lat = props.locationFilter.latitude
      ? parseFloat(props.locationFilter.latitude).toFixed(10)
      : '',
    lng = props.locationFilter.longtitude
      ? parseFloat(props.locationFilter.longtitude).toFixed(10)
      : '',
    filterObj = props.locationFilter.latitude ? { lat, lng } : {};

  const [state, setState] = useContext(AppContext);
  const [filterObject, setFilterObject] = useState(filterObj);
  const [gridClass, setgridClass] = useState(null);
  const [listTotalCount, setListTotalCount] = useState(0);
  const [FilterOptionValue, setFilterOptionValue] = useState(filterObj);
  const [cuisineFilterOptionValue, setCuisineFilterOptionValue] = useState('');
  const [dishFilterOptionValue, setDishFilterOptionValue] = useState('');
  const [rating, setRating] = useState();
  const [price, setPrice] = useState([]);
  // const [minRange, setMinRange] = useState();
  // const [maxRange, setMaxRange] = useState();
  const [firstParams, setFirstParams] = useState(state.firstparams ? state.firstparams : 15);
  const [latitude, setLatitude] = useState(
    props.locationFilter.latitude ? parseFloat(props.locationFilter.latitude).toFixed(10) : ''
  );
  const [longitude, setLongitude] = useState(
    props.locationFilter.longtitude ? parseFloat(props.locationFilter.longtitude).toFixed(10) : ''
  );
  const [priceFlagYn, setPriceFlagYn] = useState(false);
  const [experience, setExperience] = useState('');
  const [startTime, setstartTime] = useState('');
  const [endTime, setendTime] = useState('');

  function handleGrid(e) {
    //handling grid styles
    try {
      setgridClass(e);
    } catch (error) {
      //console.log('error', error.message);
    }
  }

  function filterByLocation(address, filterLatitude, filterLongitude) {
    setLatitude(filterLatitude);
    setLongitude(filterLongitude);
  }
  //get chef list total count
  function getChefListTotalCount(count) {
    setListTotalCount(count);
  }

  function firstParamsValue(value) {
    setFirstParams(firstParams + 15);
  }

  function setFilterOption(filterOption) {
    // order by options for price,rating chef created date
    setFilterOptionValue(filterOption);
  }

  function setDishOption(filterOption) {
    // for dish filters
    if (filterOption === '{undefined}') {
      setDishFilterOptionValue('');
    } else {
      setDishFilterOptionValue(filterOption);
    }
  }
  function setCuisineOption(filterOption) {
    // for cuisine filters
    if (filterOption === '{undefined}') {
      setCuisineFilterOptionValue('');
    } else {
      setCuisineFilterOptionValue(filterOption);
    }
  }

  function setRatingValue(rating) {
    setRating(rating);
  }

  function setPriceValue(value) {
    // console.log('min', min, 'max', max);
    // let minValue = min,
    //   maxValue = max;
    // if (min != null && max != null && min != 0 && max != 0) {
    //   setPriceFlagYn(maxValue > minValue);
    //   if (maxValue - minValue > 0) {
    //     setMinRange(min);
    //     setMaxRange(max);
    //   } else {
    //     toastMessage('error', 'Max value should be greater');
    //   }
    // } else if (min != 0 && max == 0) {
    //   toastMessage('error', 'Max value should be greater');
    // } else if (min == 0 && max != 0) {
    //   setMinRange(min);
    //   setMaxRange(max);
    // }
    // if (min == 0 && max == 0) {
    // setMinRange(min);
    // setMaxRange(max);
    setPrice(value);

    // }
    // if (!min && max) {
    //   toastMessage('error', 'Enter both price values');
    // }
  }

  function setExperienceValue(exp) {
    setExperience(exp);
  }

  function setEventTime(start, end) {
    setstartTime(start);
    setendTime(end);
  }
  function SendFilterOption() {
    rangeObj = {
      lat: latitude ? latitude : undefined,
      lng: longitude ? longitude : undefined,
      type: 'CHEF_LIST',
      cuisine: cuisineFilterOptionValue !== '' ? cuisineFilterOptionValue : undefined,
      dish: dishFilterOptionValue !== '' ? dishFilterOptionValue : undefined,
      rating: rating !== '' ? rating : undefined,
      // min_price: maxRange == 20 ? 0 : minRange ? minRange : undefined,
      // max_price: maxRange ? maxRange : undefined,
      pricing: price && price.length > 0 ? price : [],
      experience: experience ? experience : undefined,
      event_from_time: startTime ? startTime : undefined,
      event_to_time: endTime ? endTime : undefined,
      event_gmt_from_time: startTime
        ? moment(startTime)
            .utc()
            .format()
        : undefined,
      event_gmt_to_time: endTime
        ? moment(endTime)
            .utc()
            .format()
        : undefined,
    };
    rangeObj = JSON.stringify(rangeObj);
    rangeObj = JSON.stringify(rangeObj);
    return rangeObj;
  }

  return (
    <React.Fragment>
      <Page>
        <div className="cheflist">
          <section className="cart-area ptb-60">
            <div className="cart-totals">
              <section className="products-collections-area">
                <div className="container" id="chef-list-container">
                  {/* <div className="section-title">
                    <h2>
                      <span className="dot"></span>
                      {s.CHEF_LIST}
                    </h2>
                  </div> */}
                  <div className="row">
                    <LeftSidebar
                      setFilterOption={setFilterOption}
                      setDishOption={setDishOption}
                      setCuisineOption={setCuisineOption}
                      setRatingValue={setRatingValue}
                      setPriceValue={setPriceValue}
                      setExperienceValue={setExperienceValue}
                      setEventTime={setEventTime}
                    />
                    <div className="col-lg-9 col-md-12">
                      {/* <card> */}
                      <ChefFilterOptions
                        location={props.locationFilter.location}
                        firstParams={firstParams}
                        filterByLocation={filterByLocation}
                        handleGrid={handleGrid}
                        listTotalCount={listTotalCount}
                      />
                      <div
                        id="products-filter"
                        className={`products-collections-listing row ${gridClass}`}
                        style={{
                          display: 'flex',
                          justifyContent: 'flex-start',
                          // height: '54vh',
                          // width: '85vw',
                        }}
                      >
                        {/* {console.log("firstParams",firstParams)} */}
                        <ChefList
                          listTotalCount={listTotalCount}
                          getChefListTotalCount={getChefListTotalCount}
                          filterOption={SendFilterOption()}
                          lat={filterObject.lat}
                          // firstParamsValue={firstParamsValue}
                          firstParams={firstParams ? firstParams : 15}
                        />
                      </div>
                      {listTotalCount > firstParams && (
                        <div className="load-more-button">
                          <button
                            className="btn btn-primary"
                            id="view-details-button"
                            onClick={() => firstParamsValue()}
                          >
                            Load More
                          </button>
                        </div>
                      )}
                      {/* </card> */}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </section>
        </div>
      </Page>
    </React.Fragment>
  );
};
export default ChefListScreen;
