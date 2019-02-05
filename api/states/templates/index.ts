import organisationDx from './organisationDx'
import emailAddress from './emailAddress'
import organisationAddress from './organisationAddress'
import organisationName from './organisationName'
import pbaNumber from './organisationPba'

const templates: any = []

templates.any = {
    'email-address': emailAddress,
    name,
    'organisation-address': organisationAddress,
    'organisation-dx': organisationDx,
    'organisation-name': organisationName,
    'organisation-pba': pbaNumber,
}

export default templates
