export type Section = {
	AdditionalText: string;
	AdditionalText2: string;
	CreatedDateTime: string;
	CreateLocation: string;
	CreatedBy: string;
	Description: string;
	Id: number;
	UpdatedDateTime: string;
	UpdatedBy: string;
	PrintDesc: string;
	PrintSequence: number;
	SectionLegend: string;
	ShortDesc: string;
};

export type Seat = {
	Id: number;
	SectionId: number;
	SeatRow: string;
	SeatNumber: string;
	ZoneId: number;
	AllocationId: number;
	SeatTypeId: number;
	LogicalSeatRow: number;
	LogicalSeatNumber: number;
	XPosition: number;
	YPosition: number;
	IsSeat: boolean;
	SeatStatusId: number;
	AisleIndicator: string;
	HasStairs: boolean;
	ScreenId: number;
	DisplayLetter: string;
	HoldCodeId: number;
};

export type Price = {
	PerformanceId: number;
	PackageId: number;
	ZoneId: number;
	PriceTypeId: number;
	Price: number;
	Enabled: boolean;
	IsEditable: boolean;
	LayerTypeId: number;
	IsEditableForWeb: boolean;
	EditableMinPrice: number;
	IsBase: boolean;
	ParentPackageId: number;
	PerformancePriceTypeId: number;
	MinPrice: number;
	IsBest: boolean;
	Offer: boolean;
	ModeOfSaleOfferId: number;
};

export type Ticket = {
	section: string;
	row: string;
	seatNumber: number;
	price: number;
};
