import OffersTable from "./OffersTable";
import ReactPaginate from "react-paginate";
import Loader from "react-loader-spinner";

import "../../index.scss";

export default function DirectoryList({ offerList, ...props }) {
    const [loadData, setLoadData] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        offerList(1)
            .then(res => {
                setData(res.data);
                setLoadData(false);
            })
            .catch(err => console.log(err));
    }, []);

    const handlePageClick = page => {
        offerList(page.selected + 1)
            .then(res => {
                setData(res.data);
            })
            .catch(err => console.log(err));
    };

    return (
        <>
            <div className="App">
                {loadData ? (
                    <div className="loader">
                        <Loader
                            type="Bars"
                            color="#000"
                            height={100}
                            width={100}
                            timeout={4000}
                        />
                    </div>
                ) : (
                    <>
                        <OffersTable offers={data} />
                        <div class="paginationContainer">
                            <ReactPaginate
                                previousLabel="← Previous"
                                nextLabel="Next →"
                                breakLabel="..."
                                pageCount={data.pages}
                                marginPagesDisplayed={3}
                                pageRangeDisplayed={2}
                                onPageChange={handlePageClick}
                                containerClassName="pagination"
                                subContainerClassName="pages pagination"
                                activeClassName="active"
                            />
                        </div>
                    </>
                )}
            </div>
        </>
    );
}
