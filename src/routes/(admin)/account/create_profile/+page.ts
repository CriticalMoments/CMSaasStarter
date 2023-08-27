import { _hasFullProfile } from '../+layout.js';
import { redirect } from '@sveltejs/kit';

export async function load({ parent }) {
    let data = await parent();

    // They completed their profile! Redirect to account home
    if (_hasFullProfile(data?.profile)) {
        throw redirect(303, '/account')
    }

    return data
}