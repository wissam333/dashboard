<template>
    <div class="container-fluid" style="width: 100vw;">
        <h2 class="my-8">اخر الطلبات</h2>
        <!-- row -->
        <div class="container-fluid">
            <div class="form-head d-flex mt-4 mb-4 align-items-start">
                <div class="input-group search-area d-inline-flex" style="max-width: 150px;">
                    <input type="text" style="height: 48px;" class="form-control" placeholder="Search here">
                    <div class="input-group-append">
                        <span class="input-group-text" style="padding: 0 !important;"><i class="bi bi-search"></i></span>
                    </div>
                </div>
                <div class="dropdown ms-auto d-inline-block">
                    <div class="btn btn-outline-primary btn-rounded dropdown-toggle" data-bs-toggle="dropdown">
                        <svg class="me-3" width="28" height="28" viewBox="0 0 28 28" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0)">
                                <path
                                    d="M22.4276 2.856H21.8676V1.428C21.8676 0.56 21.2796 0 20.4396 0C19.5996 0 19.0116 0.56 19.0116 1.428V2.856H9.71557V1.428C9.71557 0.56 9.15557 0 8.28757 0C7.41957 0 6.85957 0.56 6.85957 1.428V2.856H5.57157C2.85557 2.856 0.55957 5.152 0.55957 7.868V23.016C0.55957 25.732 2.85557 28.028 5.57157 28.028H22.4276C25.1436 28.028 27.4396 25.732 27.4396 23.016V7.868C27.4396 5.152 25.1436 2.856 22.4276 2.856ZM5.57157 5.712H22.4276C23.5756 5.712 24.5836 6.72 24.5836 7.868V9.856H3.41557V7.868C3.41557 6.72 4.42357 5.712 5.57157 5.712ZM22.4276 25.144H5.57157C4.42357 25.144 3.41557 24.136 3.41557 22.988V12.712H24.5556V22.988C24.5836 24.136 23.5756 25.144 22.4276 25.144Z"
                                    fill="#EA4989"></path>
                            </g>
                            <defs>
                                <clipPath id="clip0">
                                    <rect width="28" height="28" fill="white"></rect>
                                </clipPath>
                            </defs>
                        </svg>
                        Today
                    </div>
                    <div class="dropdown-menu dropdown-menu-left">
                        <a class="dropdown-item" href="#">A To Z List</a>
                        <a class="dropdown-item" href="#">Z To A List</a>
                    </div>
                </div>

            </div>
            <div class="row">
                <div class="col-xl-12">
                    <div class="table-responsive">
                        <table id="example5" class="display mb-4 dataTablesCard" style="width: 100%;">
                            <thead>
                                <tr>
                                    <th><strong class="font-w600">Order ID</strong></th>
                                    <th><strong class="font-w600">Date</strong></th>
                                    <th><strong class="font-w600 wspace-no">Customer Name</strong></th>
                                    <th><strong class="font-w600">Location</strong></th>
                                    <th><strong class="font-w600">Amount</strong></th>
                                    <th><strong class="font-w600 wspace-no">Status Order</strong></th>
                                    <th><strong class="font-w600">Edit</strong></th>


                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="order in orders">
                                    <td>{{ order.order_id }}</td>
                                    <td class="wspace-no">26 March 2020<br> 12:42 AM</td>
                                    <td>James WItcwicky</td>
                                    <td>Corner Street 5th London</td>
                                    <td>${{ order.order_total }}</td>
                                    <td><a class="btn btn-warning light btn-sm">PENDING</a></td>
                                    <td>
                                        <div class="dropdown ms-auto c-pointer">
                                            <div class="btn-link" data-bs-toggle="dropdown">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M11.0005 12C11.0005 12.5523 11.4482 13 12.0005 13C12.5528 13 13.0005 12.5523 13.0005 12C13.0005 11.4477 12.5528 11 12.0005 11C11.4482 11 11.0005 11.4477 11.0005 12Z"
                                                        stroke="#3E4954" stroke-width="2" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path
                                                        d="M18.0005 12C18.0005 12.5523 18.4482 13 19.0005 13C19.5528 13 20.0005 12.5523 20.0005 12C20.0005 11.4477 19.5528 11 19.0005 11C18.4482 11 18.0005 11.4477 18.0005 12Z"
                                                        stroke="#3E4954" stroke-width="2" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path
                                                        d="M4.00049 12C4.00049 12.5523 4.4482 13 5.00049 13C5.55277 13 6.00049 12.5523 6.00049 12C6.00049 11.4477 5.55277 11 5.00049 11C4.4482 11 4.00049 11.4477 4.00049 12Z"
                                                        stroke="#3E4954" stroke-width="2" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                </svg>
                                            </div>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                <a class="dropdown-item text-info" href="#">
                                                    <svg class="me-2" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18457 2.99721 7.13633 4.39828 5.49707C5.79935 3.85782 7.69279 2.71538 9.79619 2.24015C11.8996 1.76491 14.1003 1.98234 16.07 2.86"
                                                            stroke="#2F4CDD" stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round" />
                                                        <path d="M22 4L12 14.01L9 11.01" stroke="#2F4CDD" stroke-width="2"
                                                            stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                    Accept order
                                                </a>
                                                <a class="dropdown-item text-danger" href="#">
                                                    <svg class="me-2" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                                            stroke="#F24242" stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round"></path>
                                                        <path d="M15 9L9 15" stroke="#F24242" stroke-width="2"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M9 9L15 15" stroke="#F24242" stroke-width="2"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                    Reject order
                                                </a>
                                                <RouterLink style="color: #333;" :to="{
                                                    path: '/OrderDetails',
                                                    name: 'OrderDetails',
                                                    component: OrderDetails,
                                                    params: { id: order.id }
                                                }
                                                    " class="dropdown-item text-black" href="javascript:;">
                                                    <svg class="ms-2" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                                            stroke="#6F6F6F" stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round" />
                                                        <path d="M12 16V12" stroke="#6F6F6F" stroke-width="2"
                                                            stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M12 8H12.01" stroke="#6F6F6F" stroke-width="2"
                                                            stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                    View Details
                                                </RouterLink>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { mapState } from 'vuex';

export default {
    name: 'OrderView',
    components: {
    },
    data() {
        return {

        }
    },
    methods:
    {


    },
    watch:
    {

    },
    computed:
    {
        ...mapState({
            orders: state => state.Order_List,
        })
    }
}
</script>
<style lang="scss" scoped>
thead,
tbody,
tfoot,
tr,
td,
th {
    padding: 8px 15px;
    white-space: nowrap;
}
</style>
  