import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

// const resObj = {
//   info: {
//     id: "801745",
//     name: "Pizza Hut",
//     cloudinaryImageId:
//       "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/12/88f303b9-f770-4e37-9799-97ae04a5ac27_801745.JPG",
//     locality: "Aarti Talkies Square",
//     areaName: "Urich Mall",
//     costForTwo: "₹400 for two",
//     cuisines: ["Pizzas"],
//     avgRating: 4.2,
//     parentId: "721",
//     avgRatingString: "4.2",
//     totalRatingsString: "543",
//     sla: {
//       deliveryTime: 27,
//       lastMileTravel: 1.2,
//       serviceability: "SERVICEABLE",
//       slaString: "25-30 mins",
//       lastMileTravelString: "1.2 km",
//       iconType: "ICON_TYPE_EMPTY",
//     },
//     availability: {
//       nextCloseTime: "2026-02-15 23:00:00",
//       opened: true,
//     },
//     badges: {},
//     isOpen: true,
//     type: "F",
//     badgesV2: {
//       entityBadges: {
//         imageBased: {},
//         textBased: {},
//         textExtendedBadges: {},
//       },
//     },
//     aggregatedDiscountInfoV3: {
//       header: "ITEMS",
//       subHeader: "AT ₹59",
//     },
//     differentiatedUi: {
//       displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//       differentiatedUiMediaDetails: {
//         lottie: {},
//         video: {},
//       },
//     },
//     reviewsSummary: {},
//     displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     restaurantOfferPresentationInfo: {},
//     externalRatings: {
//       aggregatedRating: {
//         rating: "--",
//       },
//     },
//     ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
//   },
// };

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
