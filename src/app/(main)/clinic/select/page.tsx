import HeaderCenter from '@/components/layout/headerCenter';
import SelectClinic from '@/features/SelectEntity/Clinic';
import { getClient } from '@/lib/apollo-client';
import { ICountry } from '@/shared/types/country.interface';
import { gql } from '@apollo/client';
const GET_COUNTRIES = gql(`
query Countries {
    countries {
        _id
        slug
        title
    }
}
`);
export default async function Page() {
    const { data } = await getClient().query({ query: GET_COUNTRIES });
    const countries: ICountry[] = data.countries;
    return (
        <>
            <HeaderCenter title='Выбор клиники' />
            <SelectClinic countries={countries} />
        </>
    );
}
