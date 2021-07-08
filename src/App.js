import DirectoryList from "./ui/components/DirectoryList";
import { GETALLOFFERS } from "./api";

const fetchOffersList = async page => {
    return await GETALLOFFERS(page);
};

export default function App() {
    return (
        <>
            <DirectoryList offerList={fetchOffersList} />
        </>
    );
}
