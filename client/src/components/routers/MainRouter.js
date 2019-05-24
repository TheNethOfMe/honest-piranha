import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

// Route Types
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";

// Admin Components
import Admin from "../auth/Admin";
import Dashboard from "../adminOnly/Dashboard";
import CreateSeries from "../adminOnly/CreateSeries";
import CreateEntry from "../adminOnly/CreateEntry";
import AdminEntryList from "../adminOnly/AdminEntryList";
import AdminUserList from "../adminOnly/AdminUserList";
import ModerateComments from "../adminOnly/ModerateComments";
import GetAdminMessages from "../messages/GetAdminMessages";
import GetOneTicket from "../messages/GetOneTicket";
// User Components
import UserDash from "../userArea/UserDash";
import ChangeEmail from "../userArea/ChangeEmail";
import SendMessage from "../messages/SendMessage";
import SendMsgAdmin from "../messages/SendMsgAdmin";
import GetMessages from "../messages/GetMessages";
import GetOneMessage from "../messages/GetOneMessage";
import UserFavorites from "../userArea/UserFavorites";
import UserComments from "../userArea/UserComments";
import BlockList from "../userArea/BlockList";
import DeleteAccount from "../userArea/DeleteAccount";
// Public Components
import DisplayEntry from "../entryDisplay/DisplayEntry";
import EntryList from "../entryDisplay/EntryList";
import EntryListSeries from "../entryDisplay/EntryListSeries";
import DisplaySeries from "../entryDisplay/DisplaySeries";
import Snes from "../other/Snes";
import Register from "../auth/Register";
import Login from "../auth/Login";
import NotFound from "../other/NotFound";

export default class MainRouter extends Component {
  render() {
    return (
      <Switch>
        {
          // ADMIN ROUTES
        }
        <AdminRoute exact path="/admin" component={Admin} />
        <AdminRoute exact path="/dashboard" component={Dashboard} />
        <AdminRoute exact path="/create-series" component={CreateSeries} />
        <AdminRoute exact path="/create-entry" component={CreateEntry} />
        <AdminRoute exact path="/all-entries" component={AdminEntryList} />
        <AdminRoute exact path="/update-entry/:id" component={CreateEntry} />
        <AdminRoute exact path="/all-users" component={AdminUserList} />
        <AdminRoute
          exact
          path="/moderate-comments"
          component={ModerateComments}
        />
        <AdminRoute
          exact
          path="/get-admin-messages"
          component={GetAdminMessages}
        />
        <AdminRoute exact path="/get-one-ticket/:id" component={GetOneTicket} />
        {
          // USER ROUTES
        }
        <PrivateRoute exact path="/user-dashboard" component={UserDash} />
        <PrivateRoute exact path="/change-email" component={ChangeEmail} />
        <PrivateRoute exact path="/send-message" component={SendMessage} />
        <PrivateRoute exact path="/contact-us" component={SendMsgAdmin} />
        <PrivateRoute exact path="/get-messages" component={GetMessages} />
        <PrivateRoute exact path="/get-message/:id" component={GetOneMessage} />
        <PrivateRoute exact path="/my-favorites" component={UserFavorites} />
        <PrivateRoute exact path="/my-comments" component={UserComments} />
        <PrivateRoute exact path="/my-block-list" component={BlockList} />
        <PrivateRoute exact path="/delete-account" component={DeleteAccount} />
        {
          // PUBLIC ROUTES
        }
        <Route exact path="/" component={EntryList} />
        <Route exact path="/series/:series" component={EntryListSeries} />
        <Route exact path="/type/:type" component={DisplaySeries} />
        <Route exact path="/view/:id" component={DisplayEntry} />
        <Route exact path="/snes" component={Snes} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}
