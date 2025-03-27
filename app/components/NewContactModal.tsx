import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import colors from '../config/colors';

// Define the contact type
interface Contact {
  name: string;
  phoneNumber: string;
}

// Define the props type for the modal
interface NewContactModalProps {
  isVisible: boolean;
  onClose: () => void;
  onCreateContact: (contact: Contact) => void;
}

const NewContactModal: React.FC<NewContactModalProps> = ({
  isVisible,
  onClose,
  onCreateContact,
}) => {
  const [newContact, setNewContact] = useState<Contact>({
    name: '',
    phoneNumber: '',
  });

  const handleCreateContact = () => {
    // Validate contact information
    if (newContact.name.trim() && newContact.phoneNumber.trim()) {
      // Call the passed onCreateContact function with the new contact
      onCreateContact(newContact);

      // Reset the form
      setNewContact({ name: '', phoneNumber: '' });
    } else {
      // Optional: Add error handling or validation message
      console.warn('Please fill in all fields');
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Create New Contact</Text>

          <TextInput
            style={styles.input}
            placeholder="Contact Name"
            value={newContact.name}
            onChangeText={(text) =>
              setNewContact((prev) => ({ ...prev, name: text }))
            }
          />

          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            keyboardType="phone-pad"
            value={newContact.phoneNumber}
            onChangeText={(text) =>
              setNewContact((prev) => ({ ...prev, phoneNumber: text }))
            }
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.createButton]}
              onPress={handleCreateContact}
            >
              <Text style={styles.buttonText}>Create Contact</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={onClose}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  createButton: {
    backgroundColor: colors.primary,
  },
  cancelButton: {
    backgroundColor: 'gray',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default NewContactModal;
