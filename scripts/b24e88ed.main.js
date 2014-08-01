!function(){window.TousLeTemps=Ember.Application.create()}(),function(){Ember.Handlebars.registerHelper("t",function(a,b){var c=b.hash,d=this;return Object.keys(c).forEach(function(a){c[a]=Ember.Handlebars.get(d,c[a],b)}),I18n.t(a,c)})}(),function(){I18n.defaultLocale="en-US",I18n.locale=window.navigator.language||"en-US",I18n.fallbacks=!0,I18n.translations={en:{app:{title:"World Clock"},welcome:"Welcome to Rec Room!"},fr:{app:{title:"Horloge de monde"},welcome:"Bievenue à Rec Room !"}}}(),function(){TousLeTemps.ClockController=Ember.ObjectController.extend({init:function(){this.updateTime(),this._super()},updateTime:function(){var a=this;setTimeout(function(){a.set("localTime",moment().format("h:mm:ss a")),a.get("model").forEach(function(a){a.set("time",moment().tz(a.get("name")).format("h:mm:ss a"))}),a.updateTime()},1e3)},localTime:moment().format("h:mm:ss a")})}(),function(){TousLeTemps.TimezonesController=Ember.ObjectController.extend({init:function(){var a=[];for(var b in moment.tz._zones)a.push({name:moment.tz._zones[b].name,offset:moment.tz._zones[b].offset[0]});this.set("timezones",a),this._super()},selectedTimezone:null,actions:{add:function(){var a=this.store.createRecord("timezone",{name:this.get("selectedTimezone").name,offset:this.get("selectedTimezone").offset});a.save()},remove:function(a){a.destroyRecord()}}})}(),function(){TousLeTemps.ApplicationSerializer=DS.IndexedDBSerializer.extend(),TousLeTemps.ApplicationAdapter=DS.IndexedDBAdapter.extend({databaseName:"TousLeTemps",version:1,migrations:function(){this.addModel("timezone")}})}(),function(){TousLeTemps.Timezone=DS.Model.extend({name:DS.attr("string"),offset:DS.attr("number")})}(),function(){TousLeTemps.ApplicationRoute=Ember.Route.extend({redirect:function(){this.transitionTo("clock")}})}(),function(){TousLeTemps.ClockRoute=Ember.Route.extend({model:function(){return this.get("store").find("timezone")}})}(),function(){TousLeTemps.TimezonesRoute=Ember.Route.extend({model:function(){return this.get("store").find("timezone")}})}(),function(){TousLeTemps.ClockView=Ember.View.extend({})}(),function(){TousLeTemps.TimezonesView=Ember.View.extend({})}(),function(){TousLeTemps.Router.map(function(){this.route("clock"),this.resource("timezones")})}();