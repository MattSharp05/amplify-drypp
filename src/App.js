import { useState } from 'react';
import React from 'react';
import './App.css';
import {
  ProfileCard, 
  ProfileCardCollection,
  HydrationActivityCreateForm,
  HydrationCardCollection,
  CustomizedHeader,
  CustomisedFooter,
  MarketingPricing,
  HomeCard,
  AddUser 
 } from './ui-components';
 import { withAuthenticator } from '@aws-amplify/ui-react';
 import { ThemeProvider } from '@aws-amplify/ui-react';
 import { studioTheme } from "./ui-components";


 const customTheme = {
  ...studioTheme,
  tokens: {
    colors: {
      background: { value: '#ffffff' }, // Change this to your desired color
    },
  },
};

 
 <HydrationActivityCreateForm />

function App({user, signOut}) {
  const [showForm, setShowForm] = useState(false)
  const [showPricingForm, setShowPricingForm] = useState(false)
  const [showProfileForm, setShowProfileForm] = useState(false)


  const formOverride = {
    MyIcon: {
      style:{
        cursor: "pointer",
      },
      onClick: () => {
        setShowForm(!showForm)
      } 
    }


  }

  const navbarOverrides = {
    "Button": {
      onClick: signOut,

    },
    "MyIcon": {
      style:{
        cursor: "pointer",
      },
      onClick: () => {
        setShowProfileForm(!showProfileForm)
      }
    },
    "Add Activity": {
      style:{
        cursor: "pointer",
      },
      onClick: () => {
        setShowForm(!showForm)
      } 
    },
    "Pricing": {
      style:{
        cursor: "pointer",
      },
      onClick: () => {
        setShowPricingForm(!showPricingForm)
      } 
    }
  }
  return (
    
    <div className="App">
        <CustomizedHeader width={"100%"} overrides={navbarOverrides}/>
      <header className="App-header">

      {showPricingForm && (
           <MarketingPricing
          overrides={formOverride}
          />
        )
      }

      {showProfileForm && (
           <ProfileCard
          overrides={formOverride}
          />
        )
      }

      <HomeCard />


        {showForm && (
           <HydrationActivityCreateForm
          overrides={formOverride}
          />
        )
        }

  

  

      <HydrationCardCollection />

      </header>
        <CustomisedFooter width={"100%"}/>

    </div>
  );
}

export default withAuthenticator(App)
