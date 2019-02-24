import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';


const styles = (theme) => ({
  content: {
    marginLeft: 300
  },
  textArea: {
    // padding: '50px 50px 50px 50px',
    paddingTop: 50,
    display: 'flex',
    flexDirection: 'column'
  },
  clause: {
    padding: '15px 100px 15px 60px;'
  }
});

class LeaseText extends PureComponent {

  render() {
    const {
      classes
    } = this.props;

    return (
      <div className={classes.content}>
        <div className={classes.textArea}>
          <span className={classes.clause}>
            <b>Parties.</b> This Agreement is made and entered into on February 24, 2019, between _______ (Landlord) and _______ (Tenant).
          </span>
          <span className={classes.clause}>
            <b>Premises.</b> Landlord rents to Tenant, and Tenant rent from Landlord, for residential purposes only, the premises at 123 Main St., San Francisco, California(Premises).
          </span>
          <span className={classes.clause}>
            <b>Term.</b> The term begins on March 1, 2019, and the term (and this Agreement) expire on March 1, 2020. If Tenant vacates before expiration, Tenant is liable for the rent for the remainder of the term, less rent Landlord could collect from a replacement.
          </span>
          <span className={classes.clause}>
            <b>Rent.</b> Tenant will pay Landlord monthly rent of $3,000.00 on the 1st day of each month. Payment will be made by sending [check/cryptocurrency] to [address/wallet].  Tenant will pay Landlord a deposit of $3,000.00 by sending [check/cryptocurrency] to [address/wallet].
Deposit. Within three weeks after Tenant has vacated the premises, in accordance with Cal. Civ. Code ß 1950.5, Landlord will deliver Tenant an itemized written statement of the reasons for, and the dollar amount of, any of the security deposit retained by the Landlord and will return any security deposit balance.
          </span>
          <span className={classes.clause}>
            <b>Repair.</b> If the Premises are damaged by Tenant, upon delivery by Landlord to Tenant of a written statement of the reasons for, and the dollar amount for any repairs, Tenant will reimburse Landlord for the cost of any repairs to the premises, including Landlord's personal property therein.
          </span>
          <span className={classes.clause}>
            <b>Access for Inspection.</b> Landlord or its agents may enter the premises to make repairs, supply services, show the premises, and to conduct an initial move-out inspection as provided by Cal. Civ. Code 1950.5(f). Landlord will give Tenant reasonable notice of intent to enter (at least 24 hours notice or 48 hours notice for an initial move-out inspection) and will enter only during regular business hours. Notices will include the purpose, date and time of the intended entry.
          </span>
          <span className={classes.clause}>
            <b>Prohibitions Against Violating Laws.</b> Tenant is entitled to quiet enjoyment of the premises. Tenant and its guests or invitees will not use the premises or adjacent areas in such a way as to: violate any law or, commit waste or commit nuisance.
          </span>
          <span className={classes.clause}>
            <b>Termination.</b> The failure of Tenant to comply with any term of this Agreement, or the misrepresentation of any material fact on Tenant's rental application, is grounds for termination of the tenancy. Landlord may provide notice to Tenant upon Tenantís breach of the Agreement.  If Tenant fails to cure the breach within the period prescribed in Cal. Code of Civ. Proc. 1161(2)-(3), Landlord may terminate this Agreement by providing notice of termination to Tenant.
          </span>
          <span className={classes.clause}>
            <b>Amendment.</b> This document constitutes the entire Agreement between the parties. Any modifications to this Agreement must be in writing agreed to by Landlord and Tenant.
          </span>
        </div>
      </div>
    );
  }
}

LeaseText.propTypes = {};

export default withStyles(styles)(LeaseText);
