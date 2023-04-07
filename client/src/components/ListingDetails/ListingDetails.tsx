import React from "react";
import { AdvertisementType, PropertyData } from "../../models/Property";

interface ListingDetails {
  listing: PropertyData;
}

const ListingDetails: React.FC<ListingDetails> = ({ listing }) => {
  return (
    <div>
      <div
        style={{ width: "90%", margin: "0 auto", backgroundColor: "#F6F5F7" }}
        className="px-sizeMedium py-sizeLarge"
      >
        <div className="mb-sizeXl">
        <p style={{ fontSize: "2rem" }} className="mb-sizeSmall">
          Property Details
        </p>
        <table>
          <tbody>
          <tr>
            <td>Price:</td>
            <td>{`${listing.price} kr.`}</td>
          </tr>
          {listing.advertisementType == AdvertisementType.RENT ? (
            <>
              <tr>
                <td>Deposit:</td>
                <td>{`${listing.deposit ? listing.deposit + ' kr.' : "-"}`}</td>
              </tr>
            </>
          ) : null}
          <tr>
            <td>Size:</td>
            <td>{`${listing.size} m2`}</td>
          </tr>
          <tr>
            <td>Rooms:</td>
            <td>{listing.rooms}</td>
          </tr>
          </tbody>
        </table>
        </div>
        <div>
        <p style={{ fontSize: "2rem" }} className="mb-sizeSmall">
          Contact Details
        </p>
        <table>
            <tbody>
            <tr>
                <td>Name:</td>
                <td>{listing.contacts.name}</td>
            </tr>
            <tr>
                <td>Email:</td>
                <td>{listing.contacts.email}</td>
            </tr>
            <tr>
                <td>Phone:</td>
                <td>{listing.contacts.phoneNumber ? listing.contacts.phoneNumber : '-'}</td>
            </tr>
            </tbody>
        </table>
        </div>
        <div className="flex flex-col">
            <button style={{padding: '5px 10px', border: '1px solid black'}}>Add to Favorites</button>
            <button style={{padding: '5px 10px', border: '1px solid black'}}>Contact us</button>
        </div>
      </div>
    </div>
  );
};

export default ListingDetails;
