import React, { useEffect, useMemo, useState } from 'react';
import { FormattedMessage, IntlProvider } from 'react-intl';
import {
    Notification,
    Kind,
    Theme,
    Table,
    TableBody,
    TableCell,
    TableRow,
    TableHeader,
    TableHeaderProps
} from '@lumx/react';
import axios from 'axios';
import { NotificationsProvider, PredefinedErrorBoundary, useLanguage, useNotifications  } from 'lumapps-sdk-js';

import messagesEn from '../translations/en.json';
import messagesFr from '../translations/fr.json';

import defaultGlobalSettings from './defaultGlobalSettings';

type Widget = import('lumapps-sdk-js').ContentComponent<
    import('./types').SampleAppGlobalParams,
    import('./types').SampleAppParams
>;
const intHeaders: Array<Partial<TableHeaderProps>>=[
    {label:'Name',
     name:'name',
     width: '400'},
     {label:'Email',
     name:'email',
     width: '700'},
     {label:'Gender',
     name:'gender',
     width:'50'},
     {label:'Status',
     name:'status',
     width:'80'},

];
const initialValue=[
 {id:0,
  name:"",
  email:"",
  gender:"",
  status:""}
];
const Widget: Widget = ({ value = {}, globalValue = {}, theme = Theme.light }) => {
    const [url, setUrl] = useState<string | undefined>();
    const [error, setError] = useState<string>();
    const [tableBodys,setTableBody]=useState(initialValue);
    const { imageId, useGreyScale, useBlur, blur }: any = value;
    const { baseUrl = defaultGlobalSettings.baseUrl }: any = globalValue;
    const tableHeader = intHeaders;
    const headers = {'Content-Type': 'application/json'};
    const dataApi=()=>{   
       
        axios.get('https://gorest.co.in/public/v1/users', {headers})    
          .then(function(response){
           console.log(response);
           setTableBody(response.data.data);  
        }).catch(function(err){
            console.log(err);
        })
    }
    useEffect(() => {
        dataApi();
        const size = 1200;
        let link = baseUrl;
        link = imageId && imageId !== '' ? `${link}id/${imageId}/${size}` : `${link}${size}`;
        link = useGreyScale ? `${link}?grayscale` : link;
        // eslint-disable-next-line no-nested-ternary
        link = useBlur && useGreyScale ? `${link}&blur` : useBlur ? `${link}?blur` : link;
        link = useBlur && blur !== '' && blur !== undefined ? `${link}=${blur}` : link;

        setUrl(link);
        
    }, [blur, imageId, useBlur, useGreyScale, url, baseUrl]);

    const { notifySuccess } = useNotifications();

    useEffect(() => {
        notifySuccess(
            'Notification from a widget !!',
            'Click me',
            () => alert("I'm a notification action callback"),
            10000,
        );
        
    }, []);
    return (
        <div >
            {error && (
                <Notification
                    theme={theme}
                    type={Kind.error}
                    content={<FormattedMessage id="errors.retrieve_user" />}
                    isOpen
                    actionLabel="Dismiss"
                    onActionClick={() => setError(undefined)}
                />
            )}
           
            <Table hasDividers theme={theme}>
                 <TableHeader>
                     <TableRow>
                        { tableHeader.map((header) =>{
                            return(
                                <TableCell
                                   key={header.name}>
                                       {header.label}
                                   </TableCell>
                            );
                        })}  
                     </TableRow>
                 </TableHeader>
                 {tableBodys.length> 0 &&
                 <TableBody>
                    {tableBodys.map((body)=>(
                            <TableRow  key={body.id}>
                                <TableCell>{body.name}</TableCell>
                                <TableCell>{body.email}</TableCell>
                                <TableCell>{body.gender}</TableCell>
                                <TableCell>{body.status}</TableCell>
                            </TableRow>
                        ))}    
                 </TableBody>
                }
            </Table>
        </div>
    );
};

const NotificationAwareWidget: Widget = (props) => {
    const { displayLanguage } = useLanguage();
    const messages: Record<string, Record<string, string>> = {
        en: messagesEn,
        fr: messagesFr,
    };
    const lang = useMemo(() => (Object.keys(messages).includes(displayLanguage) ? displayLanguage : 'en'), [
        displayLanguage,
        messages,
    ]);

    return (
        <IntlProvider locale={lang} messages={messages[lang]}>
            <NotificationsProvider>
                <PredefinedErrorBoundary>
                    <Widget {...props} />
                </PredefinedErrorBoundary>
            </NotificationsProvider>
        </IntlProvider>
    );
};

export { NotificationAwareWidget as Widget };
