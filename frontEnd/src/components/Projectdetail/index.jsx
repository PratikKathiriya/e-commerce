import "./style.css";
import SearchIcon from '@mui/icons-material/Search';

const Projectdetail = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <img src="/images/Projectdetailimg/Photo.jpg" className="firstimg" alt="" />
                    </div>
                </div>
            </div>
            <div className="container my-5 py-5">
                <div className="row d-flex justify-content-center ProjectDetails">
                    <div className="col-md-4 data me--md-5">
                         <table>
                            <tr>
                                <th>Client</th>
                                <td> your client name</td>
                            </tr>
                            <tr>
                                <th>Category</th>
                                <td>interior</td>
                           </tr>
                            <tr>
                                <th>Tags</th>
                                <td>interior,home</td>
                           </tr>
                            <tr>
                                <th>Date</th>
                                <td>Date,21,02,2022</td>
                           </tr>
                            <tr>
                                <th>link</th>
                                <td>link employee.com</td>
                           </tr>
                         </table>
                    </div>
                    <div className="col-md-6 details">
                        <h1>Minimal Look bedrooms</h1>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.
                            <br />
                            <br />
                            In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col">
                        <div className="searchmaindiv">
                            <button className="searchbutton"><SearchIcon className="search"/></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projectdetail;