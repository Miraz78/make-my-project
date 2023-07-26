// const centerListService = {
//     getCenterId: (page, page_size) => ax.get(`v2/positions/?page=${page}&page_size=${page_size}&positions_type_codes=CC,MCC`),
  
//     getCenterList: (centersId) => ax.get(`v2/groups/${centersId}/`),
  
//     getFilteredCenterList: (page, page_size, selectedId, getActiveCenters) => ax.get(`v2/groups/${selectedId}/meditation-centers/?page=${page}&page_size=${page_size}&state=${getActiveCenters}`),
  
//     getActiveCenters: (page, page_size, selectedId) => ax.get(`v2/groups/${selectedId}/meditation-centers/?page=${page}&page_size=${page_size}`),
  
//     getMeditationCenterCoordinator: (page, page_size, CoordinatorId) => ax.get(`v2/groups/${CoordinatorId}/position-assignments/?page=${page}&page_size=${page_size}&position_type_code=MCC`),
  
//     searchAbhyasi: (page, page_size, currentValue) => ax.get(`v2/myprofile/abhyasis/?ref=${currentValue}&page=${page}&page_size=${page_size}`),
  
//     // searchAbhyasi : (page, page_size, currentValue) => ax.get(`myprofile/abhyasis/${currentValue}`),
  
//     addAbhyasi: (payload, centersId) => ax.post(`v2/groups/${centersId || centerId}/position-assignments/`, payload),
  
//     updateAbhyasi: (payload, centersId, positionId) => ax.patch(`v2/groups/${centersId || centerId}/position-assignments/${positionId}/`, payload),
  
//     getCurrencyList: () => ax.get('v3/currencies/'),
//   };
  
//   export const { getCenterList, getActiveCenters, getCenterId, getMeditationCenterCoordinator, searchAbhyasi, addAbhyasi, getCurrencyList, updateAbhyasi, getFilteredCenterList } = centerListService;
  