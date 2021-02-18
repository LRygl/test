(this.webpackJsonpjs=this.webpackJsonpjs||[]).push([[0],{151:function(e,t,n){},153:function(e,t,n){},156:function(e,t,n){},228:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(24),s=n.n(r),d=(n(150),n(151),n(122)),c=n(123),l=n(145),o=n(137),u=n(15),m=function(e){return Object(u.jsx)("div",{style:{width:"1400px",margin:"0 auto",textAlign:"center",paddingBottom:"1px"},children:e.children})},h=m,j=n(234),f=n(31),b=(n(153),function(e){return Object(u.jsx)("div",{className:"footer",children:Object(u.jsxs)(m,{children:[void 0!==e.numberOfStudents?Object(u.jsx)(j.a,{style:{backgroundColor:"#F56a00",marginRight:"5px"},size:"large",children:e.numberOfStudents}):null,Object(u.jsx)(f.a,{onClick:function(){return e.handleAddStudentClickEvent()},type:"primary",children:"Add new student"})]})})}),g=(n(156),n(110)),O=function(e){if(e.ok)return e;var t=new Error(e.statusText);return t.response=e,e.json().then((function(e){t.error=e})),Promise.reject(t)},x=function(){return Object(g.a)("api/students").then(O)},S=n(142),p=n(133),y=n(232),N=n(235),v={marginBottom:"5px"},A=Object(S.a)({backgroundColor:"#f50",color:"white"},v),C=function(e){return Object(u.jsx)(p.a,{initialValues:{firstName:"",lastName:"",email:"",gender:""},validate:function(e){var t={};return e.firstName||(t.firstName="First Name is required"),e.lastName||(t.lastName="Last Name is required"),e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.gender?["MALE","male","FEMALE","female"].includes(e.gender)||(t.gender="Gender must by MALE / FEMALE"):t.gender="Gender is required",t},onSubmit:function(t,n){var a,i=n.setSubmitting;(a=t,Object(g.a)("api/students",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(a)}).then(O)).then((function(){e.onSuccess()})).catch((function(t){e.onFailure(t)})).finally((function(){i(!1)}))},children:function(e){var t=e.values,n=e.errors,a=e.touched,i=e.handleChange,r=e.handleBlur,s=e.handleSubmit,d=e.isSubmitting,c=e.submitForm,l=e.isValid;return Object(u.jsxs)("form",{onSubmit:s,children:[Object(u.jsx)(y.a,{style:v,name:"firstName",onChange:i,onBlur:r,value:t.firstName,placeholder:"First Name"}),n.firstName&&a.firstName&&Object(u.jsx)(N.a,{style:A,children:n.firstName}),Object(u.jsx)(y.a,{style:v,name:"lastName",onChange:i,onBlur:r,value:t.lastName,placeholder:"Last Name"}),n.lastName&&a.lastName&&Object(u.jsx)(N.a,{style:A,children:n.lastName}),Object(u.jsx)(y.a,{style:v,name:"email",type:"email",onChange:i,onBlur:r,value:t.email,placeholder:"Email"}),n.email&&a.email&&Object(u.jsx)(N.a,{style:A,children:n.email}),Object(u.jsx)(y.a,{style:v,name:"gender",onChange:i,onBlur:r,value:t.gender,placeholder:"Gender"}),n.gender&&a.gender&&Object(u.jsx)(N.a,{style:A,children:n.gender}),Object(u.jsx)(f.a,{onClick:function(){return c()},type:"submit",disabled:d|(a&&!l),children:"Submit"})]})}})},k=n(144),F=function(e,t,n){k.a[e]({message:t,description:n})},M=function(e,t){return F("error",e,t)},I=n(233),w=n(231),E=n(47),B=n(56),L=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={students:[],isFetching:!1,isAddStudentModalVisible:!1},e.openAddStudentModal=function(){return e.setState({isAddStudentModalVisible:!0})},e.closeAddStudentModal=function(){return e.setState({isAddStudentModalVisible:!1})},e.fetchStudents=function(){e.setState({isFetching:!0}),x().then((function(t){return t.json().then((function(t){console.log(t),e.setState({students:t,isFetching:!1})}))})).catch((function(t){console.log(t.error);var n=t.error.message,a=t.error.error;M(n,a),e.setState({isFetching:!1})}))},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.fetchStudents()}},{key:"render",value:function(){var e=this,t=this.state,n=t.students,a=t.isFetching,i=t.isAddStudentModalVisible,r=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(I.a,{title:"+ Add New Student}",visible:i,onOk:e.closeAddStudentModal,onCancel:e.closeAddStudentModal,width:250,children:Object(u.jsx)(C,{onSuccess:function(){e.closeAddStudentModal(),e.fetchStudents()},onFailure:function(e){var t=e.error.message,n=e.error.httpStatus;console.log(JSON.stringify(e)),M(t,n)}})}),Object(u.jsx)(b,{numberOfStudents:n.length,handleAddStudentClickEvent:e.openAddStudentModal})]})};if(a)return Object(u.jsx)(h,{children:Object(u.jsx)(B.a,{indicator:Object(u.jsx)(B.a,{style:{fontSize:"48px"},spin:!0})})});if(n&&n.length){var s=[{title:"",key:"Avatar",render:function(e,t){return Object(u.jsx)(j.a,{size:"large",children:"".concat(t.firstName.charAt(0).toUpperCase()).concat(t.lastName.charAt(0).toUpperCase())})}},{title:"Student Id",dataIndex:"studentId",key:"studentId"},{title:"firstName",dataIndex:"firstName",key:"firstName"},{title:"lastName",dataIndex:"lastName",key:"lastName"},{title:"email",dataIndex:"email",key:"email"},{title:"gender",dataIndex:"gender",key:"gender"}];return Object(u.jsxs)(h,{children:[Object(u.jsx)(w.a,{style:{marginBottom:"70px"},dataSource:n,columns:s,pagination:!1,rowKey:"studentId"}),r()]})}return Object(u.jsxs)(h,{children:[Object(u.jsx)(E.a,{description:Object(u.jsx)("h1",{children:"No Students were found"})}),r()]})}}]),n}(a.Component),V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,236)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),r(e),s(e)}))};s.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(L,{})}),document.getElementById("root")),V()}},[[228,1,2]]]);
//# sourceMappingURL=main.6e05fd70.chunk.js.map