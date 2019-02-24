import { leaseConstants } from '../constants'

export const editLandlord = (val) => ({
	type: leaseConstants.EDIT_LANDLORD,
	val
})


export const editAddress = (val) => ({
	type: leaseConstants.EDIT_ADDRESS,
	val

})


export const editCity = (val) => ({
	type: leaseConstants.EDIT_CITY,
	val

})

export const editState = (val) => ({
	type: leaseConstants.EDIT_STATE,
	val

})

export const editZip = (val) => ({
	type: leaseConstants.EDIT_ZIP,
	val

})

export const editTermStart = (val) => ({
	type: leaseConstants.EDIT_TERM_START,
	val

})


export const editTermEnd = (val) => ({
	type: leaseConstants.EDIT_TERM_END,
	val

})

export const editRent = (val) => ({
	type: leaseConstants.EDIT_RENT,
	val

})

export const editDeposit = (val) => ({
	type: leaseConstants.EDIT_DEPOSIT,
	val

})

export const editMethod = (val) => ({
	type: leaseConstants.EDIT_METHOD,
	val

})

export const editPaymentMethod = (val) => ({
	type: leaseConstants.EDIT_PAYMENT_METHOD,
	val

})

export const editPaymentAddress = (val) => ({
	type: leaseConstants.EDIT_PAYMENT_ADDRESS,
	val

})

export const setCurrentLease = (id) => ({
	type: leaseConstants.SET_CURRENT_LEASE,
	id
})

export const saveLease = () => ({
	type: leaseConstants.SAVE_LEASE
})

export const signLease = (id) => ({
	type: leaseConstants.SIGN_LEASE,
	id
})

export const addPets = () => ({
	type: leaseConstants.ADD_PETS
})

export const addSmoking = () => ({
	type: leaseConstants.ADD_SMOKING
})

export const addWaterbed = () => ({
	type: leaseConstants.ADD_WATERBED
})