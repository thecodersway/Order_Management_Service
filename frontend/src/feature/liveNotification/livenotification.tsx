import React, { useState, useEffect, useCallback } from 'react';
import { Platform, StyleSheet, View, Button } from 'react-native';

const Live = () => {
    const VIForegroundService = require('@voximplant/react-native-foreground-service').default;
    const foregroundService = VIForegroundService.getInstance();
    const [isRunningService, setIsRunningService] = useState(false);

    useEffect(() => {
        return () => {
            foregroundService.off();
        };
    }, []);

    const startService = useCallback(async () => {
        if (Platform.OS !== 'android') {
            console.log('Only Android platform is supported');
            return;
        }
        if (isRunningService) return;
        if (Platform.Version >= 26) {
            const channelConfig = {
                id: 'ForegroundServiceChannel',
                name: 'Notification Channel',
                description: 'Notification Channel for Foreground Service',
                enableVibration: false,
                importance: 2
            };
            await foregroundService.createNotificationChannel(channelConfig);
        }
        const notificationConfig = {
            channelId: 'ForegroundServiceChannel',
            id: 3456,
            title: 'Foreground Service',
            text: 'Foreground service is running',
            icon: 'ic_notification',
            priority: 0,
            button: 'Stop service'
        };
        try {
            subscribeForegroundButtonPressedEvent();
            await foregroundService.startService(notificationConfig);
            setIsRunningService(true);
        } catch (_) {
            foregroundService.off();
        }
    }, [isRunningService]);

    const stopService = useCallback(async () => {
        if (!isRunningService) return;
        setIsRunningService(false);
        await foregroundService.stopService();
        foregroundService.off();
    }, [isRunningService]);

    const subscribeForegroundButtonPressedEvent = () => {
        foregroundService.on('VIForegroundServiceButtonPressed', async () => {
            await stopService();
        });
    };

    return (
        <View style={styles.container}>
            <Button title="Start foreground service" onPress={startService} />
            <View style={styles.space} />
            <Button title="Stop foreground service" onPress={stopService} />
        </View>
    );
};

export default Live;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    space: {
        flex: 0.1
    }
});
