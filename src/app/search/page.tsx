type SearchPageProps = {
    searchParams: {
        q: string;
    }
}
export default function SearchPage({ searchParams }: SearchPageProps) {

    const query = searchParams.q;
    return (
        <div>
            Showing results for query :
        </div>
    )
}