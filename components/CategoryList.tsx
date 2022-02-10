import Link from "next/link";

const CategoryList = ({ categories }: { categories: String[] }) => {
    return (
        <div>
            <ul>
                {categories.map((category, index) => (
                    <li key={index}>
                        <Link href={`/category/${category.toLowerCase()}`}>
                            {category}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryList;
